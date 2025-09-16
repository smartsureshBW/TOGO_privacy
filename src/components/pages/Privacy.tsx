import Header from "../Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="bg-muted rounded-lg p-6 mb-8">
            <p className="text-muted-foreground mb-2">
              Last updated: April 7th, 2025
            </p>
            <p className="text-foreground">
              This Privacy Policy describes how Drakon Innovation Private Limited
              (hereinafter referred to as "Brainwired," "we," "us," or "our"),
              operating under the brand name Brainwired, collects, uses, and
              shares personal information of users of the TOGO website
              (www.togo.brainwired.in) and the TOGO platform, including the
              "TOGO" user application, "TOGO Doctor" doctor application, and
              "Enterprise Dashboard" (collectively, the "Platform"). This
              Privacy Policy is effective as of the date mentioned above and may
              be updated periodically. We encourage you to review this Privacy
              Policy regularly.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect the following types of information from users of our
              Platform:
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">
              1.1. Information You Provide Directly
            </h3>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
              <li>
                <strong>Account Information:</strong> When you register for an
                account, we collect your full name, email address, phone number,
                and password.
              </li>
              <li>
                <strong>Pet Information:</strong> As a pet owner, we collect
                your pet's name, breed, age, medical history, and other relevant
                details.
              </li>
              <li>
                <strong>Payment Information:</strong> When you make a purchase
                or booking through our Platform, we collect your payment card
                details and billing information.
              </li>
              <li>
                <strong>Veterinarian Information:</strong> If you are a
                veterinarian, we collect your Aadhar Card number, PAN Card
                number, KYC information, full name, contact number, email
                address, VCI license, and renewal license details.
              </li>
              <li>
                <strong>Enterprise User Information:</strong> If you are an
                enterprise user (veterinary clinic, service provider), we
                collect your business name, contact information (phone number,
                email address), address, location, professional certificates,
                licensing information, and photographs of your business
                premises.
              </li>
              <li>
                <strong>Communications:</strong> We collect information
                contained in any communications you send to us, for example,
                when you ask for support, submit comments, or report a problem.
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">
              1.2. Information We Collect Automatically
            </h3>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
              <li>
                <strong>Log Data:</strong> We automatically collect certain
                information when you access or use our Platform, including your
                IP address, browser type, operating system, referring URLs,
                device information, pages viewed, and the dates/times of your
                visits.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use
                cookies, web beacons, and other tracking technologies to collect
                information about your browsing behavior and preferences. You
                can control cookies through your browser settings and similar
                tools.
              </li>
              <li>
                <strong>Location Data:</strong> With your consent, we may
                collect precise location data from your mobile device to provide
                location-based services.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
              <li>
                <strong>Providing and Improving Our Services:</strong> To
                operate, maintain, and improve our Platform, to personalize your
                experience, and to develop new features and functionality.
              </li>
              <li>
                <strong>Account Management:</strong> To create and manage your
                account, to verify your identity, and to communicate with you
                about your account status.
              </li>
              <li>
                <strong>Facilitating Transactions:</strong> To process payments,
                to facilitate bookings and appointments, and to provide customer
                support.
              </li>
              <li>
                <strong>Communications:</strong> To send you transactional and
                promotional communications, including updates, newsletters,
                marketing offers, and other information that may be of interest
                to you.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable
                laws, regulations, and legal processes, and to protect our
                rights and interests.
              </li>
              <li>
                <strong>Pet Health Monitoring:</strong> To track pet's vital
                signs, activity levels, and location through our integrated
                health monitoring device.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. How We Share Your Information
            </h2>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
              <li>
                <strong>Third-Party Service Providers:</strong> We share
                information with third-party service providers who assist us in
                providing and improving our Services, such as payment
                processors, data analytics providers, email marketing vendors,
                and hosting providers.
              </li>
              <li>
                <strong>Veterinarians and Service Providers:</strong> We share
                your information with veterinarians and other service providers
                to facilitate bookings and appointments.
              </li>
              <li>
                <strong>Business Partners:</strong> We may share information
                with our business partners to offer you joint products or
                services.
              </li>
              <li>
                <strong>Legal Authorities:</strong> We may disclose your
                information to legal authorities if required by law or legal
                process, or if we believe that disclosure is necessary to
                protect our rights, property, or safety, or the rights,
                property, or safety of others.
              </li>
              <li>
                <strong>Affiliates:</strong> We may share your information with
                our affiliates, which are entities that control, are controlled
                by, or are under common control with Brainwired.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or other business transfer, we may share or
                transfer your information as part of the transaction.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. These measures
              include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
              <li>
                Using encryption to protect sensitive data transmitted online.
              </li>
              <li>
                Implementing physical, electronic, and procedural safeguards to
                protect data stored on our servers.
              </li>
              <li>
                Restricting access to personal information to authorized
                personnel only.
              </li>
              <li>Conducting regular security assessments and audits.</li>
            </ul>
            <p>
              However, no method of transmission over the Internet, or method of
              electronic storage, is 100% secure. Therefore, we cannot guarantee
              the absolute security of your information.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Data Retention
            </h2>
            <p>
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy unless a
              longer retention period is required or permitted by law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
              <li>
                <strong>Access:</strong> You have the right to access the
                personal information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You have the right to correct any
                inaccurate or incomplete personal information we hold about you.
              </li>
              <li>
                <strong>Deletion:</strong> You have the right to request that we
                delete your personal information, subject to certain exceptions.
              </li>
              <li>
                <strong>Objection:</strong> You have the right to object to the
                processing of your personal information for certain purposes,
                such as direct marketing.
              </li>
              <li>
                <strong>Restriction:</strong> You have the right to restrict the
                processing of your personal information under certain
                circumstances.
              </li>
              <li>
                <strong>Portability:</strong> You have the right to receive your
                personal information in a structured, commonly used, and
                machine-readable format and to transmit that data to another
                controller.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Children's Privacy
            </h2>
            <p>
              Our Platform is not intended for children under the age of 13, and
              we do not knowingly collect personal information from children
              under the age of 13. If you are a parent or guardian and believe
              that your child has provided us with personal information, please
              contact us, and we will take steps to delete that information.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. International Data Transfers
            </h2>
            <p>
              Your personal information may be transferred to and processed in
              countries other than your country of residence, including India.
              These countries may have data protection laws that are different
              from the laws of your country. By using our Platform, you consent
              to the transfer of your personal information to these countries.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              any changes on our Platform and update the "Last Updated" date
              above. Your continued use of our Platform after any changes
              constitutes your acceptance of the new Privacy Policy.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Contact Us
            </h2>
            <div className="">
              <p className="text-muted-foreground mb-4">
                If you have any questions or concerns about this Privacy Policy
                or our privacy practices, please contact us at:
              </p>
              <div className="space-y-2 text-foreground">
                <p>
                  Drakon Innovation Private Limited,
                </p>
                <p>
                   <strong>Email:</strong>info@brainwired.in
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
