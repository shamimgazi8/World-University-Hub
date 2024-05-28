import EmployeeSlider from "../@components/employee-carousel";

import JobLaningHero from "./hero";
import JobsRecommendedTwo from "../@components/job-recommended/indextwo";

const JobsLanding = ({ serverData }: any) => {
  return (
    <>
      <JobLaningHero serverData={serverData} />
      <JobsRecommendedTwo serverData={serverData} />
      {/* <JobsBrowse /> */}
      <EmployeeSlider />
      {/* <SectionBlog classes={{ root: "mt-8 lg:mt-[50px]" }} /> */}
    </>
  );
};

export default JobsLanding;
