import JobsCategory from "@/modules/jobs/category";
import React from "react";

const JobCategoryPage = ({ params }: { params: { slug: string } }) => {
  return <JobsCategory params={params} />;
};

export default JobCategoryPage;
