import React from "react";
import CommonPageHeader from "../@common/common-pages-header";
const data = [
  {
    title: "Privacy Policy",
    description:
      "We take your privacy seriously and are committed to protecting your personal information. This policy explains how we collect, use, and share your data when you use our services.",
  },
  {
    title: "Information Collection",
    description:
      "We may collect personal information such as your name, email address, and other relevant details when you sign up for an account or use our website or app. We may also collect non-personal information like IP addresses, browser type, and usage data.",
  },
  {
    title: "Data Usage",
    description:
      "We use your information to provide and improve our services, personalize content, communicate with you, and for marketing purposes with your consent. We do not sell your data to third parties.",
  },
  {
    title: "Data Security",
    description:
      "We take appropriate measures to safeguard your personal information from unauthorized access, disclosure, or alteration. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Cookies and Tracking",
    description:
      "We may use cookies and similar tracking technologies to enhance your user experience, analyze usage patterns, and deliver targeted advertisements. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "Third-Party Services",
    description:
      "Our services may include links to third-party websites or services. These third parties have their own privacy policies, and we have no control over their practices. Please review their policies before providing any personal information.",
  },
  {
    title: "Children's Privacy",
    description:
      "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us to have it removed.",
  },
  {
    title: "Changes to this Policy",
    description:
      "We may update this privacy policy from time to time. Any changes will be posted on this page, and the effective date will be indicated. Please review this policy periodically for any updates.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <CommonPageHeader
        classes={{ root: ``, title: `mb-0`, description: `` }}
        title="Privacy Policy"
      />
      <section>
        <div className="container">
          <div className="max-w-[860px] w-full mx-auto">
            {data?.map((item: any, i: any) => {
              return (
                <div key={i}>
                  <h6 className="font-semibold mb-1">{item?.title}</h6>
                  <p className="mb-2">{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
