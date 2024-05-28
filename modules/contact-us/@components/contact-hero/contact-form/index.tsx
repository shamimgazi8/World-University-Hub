"use client";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React from "react";

const ContactForm = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <section>
      <div className="container">
        <div className="max-w-[860px] w-full mx-auto">
          <p className="mb-[40px]">
            Quam ullamcorper cras etiam eget pretium sed nunc leo. Tortor non eu
            amet sed diam placerat. Quam proin eget integer tempor enim viverra
            malesuada potenti cursus. Quis morbi pharetra ultricies neque.
            Integer nunc malesuada sed tortor non fringilla imperdiet nunc
            purus. Risus volutpat quisque risus nulla. Viverra dui iaculis metus
            vehicula tincidunt imperdiet.
          </p>
          <form>
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-[30px] mb-5">
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name*"
                  className="border focus:outline-none w-full py-3 px-3  rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name*"
                  className="border focus:outline-none w-full py-3 px-3  rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email*"
                  className="border focus:outline-none w-full py-3 px-3  rounded-md"
                />
              </div>
              <div>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Mobile*"
                  className="border focus:outline-none w-full py-3 px-3  rounded-md"
                />
              </div>
              <div className="lg:col-span-2">
                <textarea
                  name=""
                  id=""
                  cols={10}
                  rows={5}
                  placeholder="Message*"
                  className="border focus:outline-none w-full px-3 py-3 rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <Checkbox onChange={onChange}>
                I agree to{" "}
                <span className="inline-block text-gradient">
                  privacy policy & terms
                </span>
              </Checkbox>
              <div>
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
