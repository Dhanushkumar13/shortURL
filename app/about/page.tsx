import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          About Our URL Shortener
        </h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Our URL shortener service was built to simplify the sharing of long, complex URLs 
            by converting them into short, easy-to-remember links that redirect to the original destination.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
          <p>
            When you enter a long URL into our service, we generate a unique, shortened link.
            When someone clicks on this shortened link, our system quickly redirects them to the 
            original destination URL. This process happens seamlessly, providing a smooth user experience.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Use Our Service?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Simplify long, unwieldy URLs</li>
            <li>Make links more shareable and memorable</li>
            <li>Track basic usage statistics</li>
            <li>Create custom branded links</li>
            <li>Improve the aesthetics of your communications</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
          <p>
            This URL shortener is built using modern web technologies including Next.js,
            React, and Tailwind CSS, providing a fast, responsive, and user-friendly experience.
          </p>
          
          <div className="mt-12">
            <Button asChild>
              <Link href="/">
                Start Shortening URLs Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}