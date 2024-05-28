import FeatureCard from "../@components/feature-card";

const browseProgramData = [
  {
    iconSrc: "/icons/features/profile.png",
    title: "Profile Evaluation",
    subTitle:
      "Once you submit your application, our expert team evaluates your profile on education, work exp. & objectives",
    btnText: "Register Now",
    link: "#",
  },
  {
    iconSrc: "/icons/features/admission-guidance.png",
    title: "Admission Guidance",
    subTitle:
      "Once you submit your application, our expert team evaluates your profile on education, work exp. & objectives",
    btnText: "Get Mentorship",
    link: "#",
  },
  {
    iconSrc: "/icons/features/test-prep.png",
    title: "Test Prep & Webinar",
    subTitle:
      "Once you submit your application, our expert team evaluates your profile on education, work exp. & objectives",
    btnText: "Register for Webinar",
    link: "#",
  },
  {
    iconSrc: "/icons/features/application.png",
    title: "Application Docs & Essay",
    subTitle: "Once you submit your application, ation, work exp. & objectives",
    btnText: "Register Now",
    link: "#",
  },
  {
    iconSrc: "/icons/features/visa.png",
    title: "Visa & Interview",
    subTitle:
      "Once you submit your application, our expert team evaluates your profile on education, work exp. & objectives",
    btnText: "Register Now",
    link: "#",
  },
  {
    iconSrc: "/icons/features/scholarship.png",
    title: "Scholarships & Financial Aid",
    subTitle:
      "Once you submit your application, our expert team evaluates your profile on education, work exp. & objectives",
    btnText: "Register Now",
    link: "#",
  },
];
const OurFeatures = () => {
  return (
    <section>
      <div className="container">
        <div className="wrapper-small">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {browseProgramData?.map((item: any, i: any) => {
              return <FeatureCard data={item} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
