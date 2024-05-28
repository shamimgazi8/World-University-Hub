"use client";

import Slider from "react-slick";
import JobCard from "../../@components/@common/job-card";
import { useGetJobQuery } from "@/appstore/job/job-api";
import { generateQueryString } from "@/helpers/utils";

const jobData = [
  {
    title: "Software Engineer (Android), Libraries",
    imgSrc: "/temp/job-icon-1.png",
    education: "Times Higher Education",
    location: "London (Greater) (GB), Hybrid",
    salary: "£35,000 - £40,000",
  },
  {
    title: "Software Engineer (Android), Libraries",
    imgSrc: "/temp/job-icon-2.png",
    education: "Times Higher Education",
    location: "London (Greater) (GB), Hybrid",
    salary: "£35,000 - £40,000",
  },
  {
    title: "Software Engineer (Android), Libraries",
    imgSrc: "/temp/job-icon-3.png",
    education: "Times Higher Education",
    location: "London (Greater) (GB), Hybrid",
    salary: "£35,000 - £40,000",
  },
  {
    title: "Software Engineer (Android), Libraries",
    imgSrc: "/temp/job-icon-4.png",
    education: "Times Higher Education",
    location: "London (Greater) (GB), Hybrid",
    salary: "£35,000 - £40,000",
  },
  {
    title: "Software Engineer (Android), Libraries",
    imgSrc: "/temp/job-icon-3.png",
    education: "Times Higher Education",
    location: "London (Greater) (GB), Hybrid",
    salary: "£35,000 - £40,000",
  },
];

const settings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MoreJob = ({ detailData }: any) => {
  const queryParams: any = { page: 1, limit: 8 };
  const queryString = generateQueryString(queryParams);
  const { data } = useGetJobQuery(queryString);

  const jobArr =
    data &&
    data?.data?.filter(
      (item: any) => parseInt(item?.id) !== parseInt(detailData?.id)
    );
  return (
    <section className="pb-[80px] lg:pb-[120px] job-carousel">
      {jobArr?.length > 2 ? (
        <div className="container">
          <h2 className="h4 text-center">Browse More Jobs</h2>
          <Slider {...settings}>
            {jobArr?.map((item: any, i: any) => {
              return (
                <div key={i}>
                  <JobCard classes={{ root: "m-3" }} data={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      ) : null}
    </section>
  );
};

export default MoreJob;
