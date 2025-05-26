import { UrlShortenerForm } from "@/components/url-shortener-form";
import { RecentUrls } from "@/components/recent-urls";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="max-w-6xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Simplify Your Links
        </h1>
        <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
          Create short, memorable links that redirect to your long URLs.
          Perfect for sharing on social media, emails, and messaging apps.
        </p>
      </section>
      
      <div className="grid gap-8 max-w-6xl mx-auto">
        <UrlShortenerForm />
        <RecentUrls />
      </div>
      
      <section className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-bold mb-2">Simple</h3>
          <p className="text-muted-foreground">
            Just paste your long URL, click shorten, and get your new link instantly.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-bold mb-2">Fast</h3>
          <p className="text-muted-foreground">
            Our system generates short links in milliseconds with zero delay.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-bold mb-2">Reliable</h3>
          <p className="text-muted-foreground">
            Your shortened links never expire and are always available when you need them.
          </p>
        </div>
      </section>
    </div>
  );
}