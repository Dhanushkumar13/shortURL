export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Privacy Policy
        </h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Your privacy is important to us. This Privacy Policy explains how we collect,
            use, and protect your information when you use our URL shortener service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p>
            When you use our URL shortener service, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>The original URL you wish to shorten</li>
            <li>The time and date when the URL was shortened</li>
            <li>Basic analytics such as the number of times a shortened URL is accessed</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide and maintain our URL shortening service</li>
            <li>Improve and personalize your experience</li>
            <li>Provide basic analytics on shortened URL usage</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information.
            However, please be aware that no method of transmission over the internet
            or method of electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Links</h2>
          <p>
            Our service may contain links to third-party websites. We have no control over
            and assume no responsibility for the content, privacy policies, or practices of
            any third-party sites or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@urlshortener.example.com.
          </p>
          
          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}