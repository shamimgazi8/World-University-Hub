import React from "react";
import CommonPageHeader from "../@common/common-pages-header";
const data = [
  {
    title: "Our Story",
    description:
      "At [Your IT Company Name], our journey began with a vision to revolutionize the IT industry. Founded in [Year], we've grown from a small team of tech enthusiasts to a dynamic company that's at the forefront of innovation. Our story is one of relentless dedication to creating cutting-edge solutions that transform businesses.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to empower businesses with technology that drives growth and efficiency. We're committed to delivering top-notch IT services and solutions that help our clients succeed in a rapidly evolving digital landscape. With a focus on quality, innovation, and client satisfaction, we're here to make a difference.",
  },
  {
    title: "Expert Team",
    description:
      "Behind every successful project at [Your IT Company Name] is a team of experts who are passionate about technology. Our diverse team brings together skilled professionals in software development, cybersecurity, cloud computing, data analytics, and more. We're united by our enthusiasm for solving complex challenges and exceeding expectations.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "At the heart of our philosophy is our client-centric approach. We believe in building strong partnerships with our clients, understanding their unique needs, and tailoring our solutions to meet their goals. Our commitment to open communication and collaboration ensures that every project is a success.",
  },
  {
    title: "Innovation Culture",
    description:
      "Innovation is in our DNA. We thrive on staying ahead of industry trends and embracing emerging technologies. Our culture fosters creativity and continuous learning, allowing us to deliver solutions that push the boundaries of what's possible. From AI to blockchain, we're excited to shape the future.",
  },
  {
    title: "Quality and Excellence",
    description:
      "Quality is at the core of everything we do. We adhere to the highest industry standards and best practices to ensure that our solutions are secure, reliable, and scalable. Our commitment to excellence has earned us the trust of clients across various sectors.",
  },
  {
    title: "Community Engagement",
    description:
      "We believe in giving back to the community that supports us. Through various initiatives, we contribute to educational programs, tech events, and social causes. Our aim is to inspire the next generation of tech leaders and create a positive impact on society.",
  },
  {
    title: "Join Our Journey",
    description:
      "Whether you're a client seeking innovative solutions or a skilled professional looking to make a difference in the IT industry, we invite you to join our journey. Together, we'll shape the future of technology and drive positive change for businesses worldwide.",
  },
];

const AboutUs = () => {
  return (
    <>
      <CommonPageHeader
        classes={{ root: ``, title: `mb-0` }}
        title="About Us"
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

export default AboutUs;
