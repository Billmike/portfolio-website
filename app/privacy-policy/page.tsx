import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy - Kayode Ayelegun',
  description: 'Privacy Policy for stacklessdev.com - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[rgb(4,9,21)] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-white font-jura">
            Privacy Policy
          </h1>
          
          <p className="text-gray-300 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy describes how Kayode Ayelegun (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or &ldquo;my&rdquo;) collects, uses, and protects your information when you visit my website at https://stacklessdev.com (the &ldquo;Website&rdquo;). This policy applies to all visitors and users of my website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Information You Provide
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you use the contact form on my website, you may provide:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Automatically Collected Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you visit my website, certain information is automatically collected:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time and date of visits</li>
              <li>Referring website addresses</li>
              <li>Google Analytics data (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              How We Use Your Information
            </h2>
            
            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Contact Form Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Information submitted through the contact form is used solely to:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Respond to your inquiries</li>
              <li>Provide the requested information or services</li>
              <li>Communicate with you about your message</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Automatically Collected Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              This information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Maintain website security</li>
              <li>Understand how visitors interact with the site (Google Analytics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Google Analytics and Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website uses Google Analytics to understand how visitors interact with the site. Google Analytics collects information such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Pages visited and time spent on each page</li>
              <li>User interactions (clicks, scrolls, form submissions)</li>
              <li>Traffic sources and referral information</li>
              <li>Device and browser information</li>
              <li>Geographic location (country/region level)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Google Analytics Data Collection
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Google Analytics uses cookies to track user behavior</li>
              <li>Data is processed by Google in accordance with their privacy policy</li>
              <li>IP addresses are anonymized to protect your privacy</li>
              <li>You can opt out of Google Analytics tracking through your browser settings</li>
              <li>We respect your cookie preferences and only collect analytics data with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Google AdSense and Advertising
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website may display advertisements through Google AdSense. When you visit this site, Google may use cookies and web beacons to collect information about your visits to this and other websites to provide you with targeted advertisements based on your interests.
            </p>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Google&apos;s Data Collection
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Google uses cookies to serve ads based on your previous visits to this website and other sites</li>
              <li>Google&apos;s use of the DoubleClick cookie enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet</li>
              <li>You may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:text-blue-300 underline">Google&apos;s Ad Settings</a></li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Third-Party Advertising
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google AdSense may use third-party vendors, including Google, who use cookies to serve ads based on your prior visits to this website. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:text-blue-300 underline">Google&apos;s Ad Settings</a> or <a href="https://www.aboutads.info" className="text-blue-400 hover:text-blue-300 underline">www.aboutads.info</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Cookies and Tracking Technologies
            </h2>
            
            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              What Are Cookies
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit.
            </p>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              How We Use Cookies
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Advertising cookies (when AdSense is implemented) for personalized ads</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Managing Cookies
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>When required by law</li>
              <li>To protect my rights and safety</li>
              <li>With your explicit consent</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Third-Party Services
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When Google AdSense is implemented, Google will collect and process data according to their own privacy policy, which can be found at <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300 underline">Google&apos;s Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Data Retention
            </h2>
            
            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Contact Form Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Information submitted through the contact form is retained only as long as necessary to respond to your inquiry and provide the requested service.
            </p>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              Automatically Collected Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              This data is retained for analytical purposes and is automatically deleted after a reasonable period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Your Rights and Choices
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              European Union (GDPR)
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li><strong>Right to Access:</strong> Request information about what data I hold about you</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white font-jura">
              California (CCPA)
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li><strong>Right to Know:</strong> Request information about data collection and sharing</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              International Data Transfers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website is hosted in Germany. If you are located outside Germany, please note that your information may be transferred to and processed in Germany, where data protection laws may differ from those in your country.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website is not intended for children under 13 years of age. I do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal information, please contact me.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I may update this Privacy Policy from time to time. I will notify you of any changes by:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &ldquo;Last updated&rdquo; date at the top of this policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white font-jura">
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or my data practices, please contact me at:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                <strong>Kayode Ayelegun</strong><br />
                Email: <a href="mailto:ayelegun.kayode@gmail.com" className="text-blue-400 hover:text-blue-300 underline">ayelegun.kayode@gmail.com</a><br />
                Website: <a href="https://stacklessdev.com" className="text-blue-400 hover:text-blue-300 underline">https://stacklessdev.com</a><br />
                Location: Berlin, Germany
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 