"use client";

import { useEffect, useState } from "react";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface UrlRecord {
  id: string;
  originalUrl: string;
  createdAt: string;
  clicks: number;
}

export function RecentUrls() {
  const [urls, setUrls] = useState<UrlRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentUrls = async () => {
      try {
        const response = await fetch("/api/url");
        if (!response.ok) {
          throw new Error("Failed to fetch recent URLs");
        }
        
        const data = await response.json();
        setUrls(data.urls || []);
      } catch (error) {
        console.error("Error fetching recent URLs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentUrls();
  }, []);

  const copyToClipboard = async (id: string) => {
    try {
      const shortUrl = `${window.location.origin}/s/${id}`;
      await navigator.clipboard.writeText(shortUrl);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const formatUrl = (url: string): string => {
    if (url.length > 40) {
      return url.substring(0, 40) + "...";
    }
    return url;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Recent URLs</CardTitle>
          <CardDescription>Loading your recent shortened URLs...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (urls.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Recent URLs</CardTitle>
          <CardDescription>
            Your recently shortened URLs will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-6">
            No shortened URLs yet. Create one above to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Recent URLs</CardTitle>
        <CardDescription>
          Your recently shortened URLs and their statistics.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Short URL</TableHead>
                <TableHead className="hidden md:table-cell">Original URL</TableHead>
                <TableHead className="hidden sm:table-cell">Created</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {urls.map((url) => (
                <TableRow key={url.id}>
                  <TableCell className="font-medium">
                    {window.location.origin}/s/{url.id}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <a 
                      href={url.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center"
                    >
                      {formatUrl(url.originalUrl)}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {formatDate(url.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">{url.clicks}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(url.id)}
                      title="Copy short URL"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}