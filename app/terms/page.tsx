export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Terms of Service
        </h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            By using our URL shortener service, you agree to these Terms of Service.
            Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptable Use</h2>
          <p>
            You agree not to use our service to shorten URLs that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Contain malware, viruses, or other malicious content</li>
            <li>Link to phishing or fraudulent websites</li>
            <li>Promote illegal activities</li>
            <li>Contain adult, offensive, or inappropriate content</li>
            <li>Infringe on intellectual property rights</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Termination of Service</h2>
          <p>
            We reserve the right to suspend or terminate your access to our service at any time,
            without prior notice or liability, for any reason, including if you breach these Terms.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental, special, consequential, 
            or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
            or other intangible losses, resulting from your access to or use of or inability to access 
            or use the service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
          <p>
            Your use of the service is at your sole risk. The service is provided on an "AS IS" and
            "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express
            or implied, including the implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material,
            we will try to provide at least 30 days' notice prior to any new terms taking effect.
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