import React from "react";
import ContactUsHero from "./@components/contact-hero";
import ContactForm from "./@components/contact-hero/contact-form";
import CommonPageHeader from "../@common/common-pages-header";

const ContactUs = () => {
  return (
    <div>
      <CommonPageHeader
        classes={{
          root: ``,
          title: `mb-5`,
          description: `text-center text-p1`,
        }}
        title="Get in Touch"
        description="<span class='block'> Have any questions?</span>
        Reach out to us from our contact form and we will get back to you shortly."
      />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
