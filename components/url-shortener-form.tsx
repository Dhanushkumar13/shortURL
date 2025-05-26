"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Link, Copy, Check } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  url: z
    .string()
    .url("Please enter a valid URL")
    .min(1, "URL is required"),
  customSlug: z
    .string()
    .regex(/^[a-zA-Z0-9-_]*$/, "Only letters, numbers, hyphens, and underscores allowed")
    .max(20, "Custom slug must be 20 characters or less")
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function UrlShortenerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      customSlug: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: values.url,
          customId: values.customSlug || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create shortened URL");
      }

      // Construct the full short URL
      const fullShortUrl = `${window.location.origin}/s/${data.id}`;
      setShortUrl(fullShortUrl);
      toast.success("URL shortened successfully!");
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!shortUrl) return;
    
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      toast.success("Copied to clipboard!");
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const reset = () => {
    form.reset();
    setShortUrl(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Shorten Your URL</CardTitle>
        <CardDescription>
          Create a shortened URL that's easy to share and remember.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Input 
                        placeholder="https://example.com/very-long-url..." 
                        {...field} 
                        className="flex-1"
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Enter the URL you want to shorten
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customSlug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Slug (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="my-custom-link" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Create a custom, memorable slug for your URL
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Shortening...
                </>
              ) : (
                <>
                  <Link className="mr-2 h-4 w-4" />
                  Shorten URL
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {shortUrl && (
        <CardFooter className="flex flex-col space-y-4">
          <div className="w-full p-3 bg-secondary rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium truncate flex-1 mr-2">{shortUrl}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={copyToClipboard}
              className="shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button variant="ghost" onClick={reset} size="sm">
            Shorten another URL
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}