import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">404</h1>
        <h2 className="text-2xl font-medium">Link Not Found</h2>
        <p className="text-muted-foreground">
          The shortened URL you're looking for doesn't exist or may have been removed.
        </p>
        <Button asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}