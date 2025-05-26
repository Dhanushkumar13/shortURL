import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {currentYear} URL Shortener. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link 
            href="/privacy" 
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
          <Link 
            href="/terms" 
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Terms
          </Link>
          <Link 
            href="/about" 
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}