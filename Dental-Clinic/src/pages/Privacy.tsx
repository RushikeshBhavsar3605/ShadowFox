const Privacy = () => (
  <div>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="opacity-80 max-w-xl mx-auto">
          How we collect, use, and protect your data.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl prose prose-sm">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-3">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may collect personal identification information when users
              visit our website, fill out forms, or engage with features. Types
              of information include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We may also gather non-personal information such as browser type,
              device details, operating system, and technical data related to
              site interaction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-3">2. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use "cookies" to enhance user experience. Cookies
              are small files stored on your device for record-keeping purposes
              and to track preferences or site activity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-3">
              3. How We Use Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Information collected is used to improve our website, personalize
              user experience, and respond to inquiries or service requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-3">
              4. Data Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We adopt appropriate data collection, storage, and processing
              practices to protect against unauthorized access, alteration,
              disclosure, or destruction of your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-3">5. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              at info@sakthidentalclinic.in.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
