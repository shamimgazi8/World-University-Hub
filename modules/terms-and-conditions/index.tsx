import React from "react";
import CommonPageHeader from "../@common/common-pages-header";
const data = [
  {
    title: "Introduction",
    description:
      "Welcome to [Your Company/Website]! These terms and conditions govern your use of our website and services. By accessing and using [Your Company/Website], you agree to be bound by these terms. If you do not agree with any part of these terms, please refrain from using our website.\n\n1. Definitions\n\n- 'We,' 'Us,' 'Our' refers to [Your Company/Website].\n- 'You,' 'Your,' 'User' refers to the person accessing or using the website.\n- 'Content' means all text, images, videos, and other materials available on [Your Company/Website].\n\n2. Acceptable Use\n\nYou agree to use [Your Company/Website] only for lawful purposes and in a manner that does not violate any applicable laws or regulations. You shall not engage in any activities that could harm the website, its users, or third parties. Additionally, you agree not to:\n\n- Use [Your Company/Website] for any unauthorized or illegal purpose.\n- Transmit or upload any harmful or malicious content.\n- Attempt to gain unauthorized access to [Your Company/Website] or its systems.\n\n3. Intellectual Property\n\n[Your Company/Website] and its content are protected by copyright, trademarks, and other intellectual property laws. You may not use, modify, reproduce, or distribute our content without prior written consent.\n\n4. Privacy Policy\n\nYour use of [Your Company/Website] is subject to our Privacy Policy. By using the website, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.\n\n5. Third-Party Content\n\n[Your Company/Website] may contain links or references to third-party websites, products, or services. We do not endorse or take responsibility for the content, accuracy, or practices of these third parties.\n\n6. Limitation of Liability\n\n[Your Company/Website] is provided on an 'as is' and 'as available' basis. We make no warranties or representations about the website's accuracy or reliability. In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising from your use or inability to use [Your Company/Website].\n\n7. Indemnification\n\nYou agree to defend, indemnify, and hold harmless [Your Company/Website] and its affiliates from any claims, losses, liabilities, damages, costs, or expenses, including legal fees, arising out of your use or misuse of the website or any violation of these terms.\n\n8. Modifications\n\nWe reserve the right to modify, suspend, or discontinue [Your Company/Website] or any part of it, with or without notice. We may also update these terms from time to time, and your continued use of the website after any changes constitutes your acceptance of the updated terms.\n\nIf you have any questions about these terms and conditions, please contact us at [Your Contact Email].",
  },
  {
    title: "User Accounts",
    description:
      "In order to access certain features of [Your Company/Website], you may be required to create a user account. When creating an account, you must provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.\n\nYou must notify us immediately if you suspect any unauthorized use of your account or any security breach. We reserve the right to suspend or terminate your account at any time for any reason, without prior notice.\n\nBy creating an account, you agree not to:\n\n- Use another person's account without their permission.\n- Use a username that is offensive, misleading, or violates the rights of others.\n- Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.\n\nWe reserve the right to remove or reclaim any username at our sole discretion.\n\nTermination of your account may result in the deletion of your content associated with the account, and we shall not be liable for any loss of such content.\n\nYou may terminate your account at any time by contacting us at [Your Contact Email]. Upon termination, we will remove your account and related information from our systems, subject to any legal obligations to retain certain data.\n\nPlease review our Privacy Policy to understand how we collect, use, and protect your personal information associated with your account.",
  },
  {
    title: "Payment and Billing",
    description:
      "If you choose to purchase any products or services through [Your Company/Website], you agree to pay all applicable fees and charges as stated on the website. Payment methods may include credit cards, PayPal, or other payment gateways offered by [Your Company/Website].\n\nAll payments are non-refundable, except as required by law or as otherwise expressly stated on the website. If you dispute any charges, you must notify us within 30 days of the charge appearing on your billing statement.\n\nIn the event of a payment dispute or chargeback, your account and access to [Your Company/Website] may be suspended until the matter is resolved.\n\nWe reserve the right to modify our fees and billing practices at any time. Any changes will be posted on the website, and the new fees will apply to future purchases or renewals after the effective date of the change.\n\nYou are responsible for maintaining accurate billing information and ensuring that your payment method is up-to-date. Failure to pay any fees may result in the termination of your account and access to [Your Company/Website].\n\nIf you have any questions or concerns about payments or billing, please contact our support team at [Your Contact Email].",
  },
  {
    title: "Content Submission",
    description:
      "You may have the opportunity to submit or upload content to [Your Company/Website], including but not limited to text, images, videos, and other materials ('User Content'). By submitting User Content, you grant [Your Company/Website] a worldwide, non-exclusive, royalty-free, transferable, and sub-licensable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with [Your Company/Website]'s services.\n\nYou represent and warrant that you have all necessary rights to grant us the license for the User Content and that the User Content does not violate any laws, infringe on any intellectual property rights, or contain any harmful or malicious content.\n\nWe reserve the right to remove or refuse to publish any User Content for any reason, without prior notice. You are solely responsible for your User Content and its consequences. We do not endorse or guarantee the accuracy, reliability, or legality of any User Content.\n\nYou acknowledge that any personal information you share as part of User Content may be publicly available and accessible to other users and third parties. Please exercise caution and avoid sharing sensitive or personally identifiable information.\n\nIf you believe that any User Content violates your rights or is otherwise inappropriate, please contact us at [Your Contact Email].",
  },
  {
    title: "Prohibited Activities",
    description:
      "You agree not to engage in any activities on [Your Company/Website] that violate any applicable laws, regulations, or these terms and conditions. Prohibited activities include but are not limited to:\n\n1. Attempting to gain unauthorized access to [Your Company/Website], its servers, or any accounts not belonging to you.\n2. Interfering with or disrupting the operation of [Your Company/Website] or its services.\n3. Uploading or transmitting any malicious code, viruses, or harmful software.\n4. Engaging in any behavior that could harm, disable, or overburden [Your Company/Website] or its servers.\n5. Violating the intellectual property rights of [Your Company/Website] or any third party.\n6. Collecting or harvesting any personal information from [Your Company/Website] without permission.\n\nWe reserve the right to investigate and take appropriate legal action against anyone who violates these terms and conditions. Such actions may include reporting to law enforcement authorities and cooperating with them in their investigations.\n\nAdditionally, we may suspend or terminate your access to [Your Company/Website] if we believe, in our sole discretion, that you have violated any of these terms or engaged in any prohibited activities.",
  },
  {
    title: "Disclaimer of Warranties",
    description:
      "Your use of [Your Company/Website] is at your own risk. [Your Company/Website] and its content are provided 'as is' without any warranties, express or implied.\n\nWe make no representations or warranties of any kind, whether express or implied, regarding the accuracy, reliability, or availability of [Your Company/Website] or its content. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement of intellectual property or other rights.\n\n[Your Company/Website] does not warrant that the website will be error-free, secure, or uninterrupted. Any content downloaded or obtained through [Your Company/Website] is done at your own risk, and you will be solely responsible for any damage to your computer system or loss of data that results from the download of such content.\n\nWe do not guarantee the accuracy, completeness, or usefulness of any content on [Your Company/Website]. The opinions and views expressed by users or third-party contributors are their own and do not necessarily reflect the views of [Your Company/Website].\n\nPlease note that some jurisdictions may not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. You may also have additional rights and remedies under applicable laws.",
  },
  {
    title: "Governing Law and Jurisdiction",
    description:
      "These terms and conditions, as well as any disputes arising from or relating to [Your Company/Website], shall be governed by and construed in accordance with the laws of [Your Country/State].\n\nAny legal action or proceeding arising from or relating to these terms or your use of [Your Company/Website] shall be exclusively brought in the courts located in [Your Country/State]. You hereby consent to the personal jurisdiction of such courts and waive any objections to the exercise of jurisdiction over you by such courts.\n\nIf any provision of these terms is found to be invalid or unenforceable, that provision shall be deemed severed from these terms, and the remainder of the terms shall remain in full force and effect.\n\nThese terms constitute the entire agreement between you and [Your Company/Website] regarding your use of the website and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and [Your Company/Website].",
  },
];

const TermsAndConditions = () => {
  return (
    <>
      <CommonPageHeader
        classes={{ root: ``, title: `mb-0`, description: `` }}
        title="Terms & Condition"
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

export default TermsAndConditions;
