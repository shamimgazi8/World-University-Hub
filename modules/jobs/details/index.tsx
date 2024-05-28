import { htmlParse, replaceUnderscore } from "@/helpers/utils";
import Image from "next/image";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import JobsRecommendedTwo from "../@components/job-recommended/indextwo";
import SocialLinks from "@/modules/@common/social-links";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import moment from "moment";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import LoadingScreen from "@/modules/@common/loading";

interface propTypes {
  data?: any;
  serverData?: any;
}

const JobDetails = ({ data, serverData }: propTypes) => {
  const breadCrumbsData = [
    { title: "Home", link: "/" },
    { title: "Jobs", link: "/jobs" },
    {
      title: `${
        data?.specializations[0]?.name
          ? data?.specializations[0]?.name
          : data?.universityName
      }`,
    },
  ];
  const contractType =
    data?.contractType && replaceUnderscore(data?.contractType);
  const contractTypeLower = contractType && contractType.toLocaleLowerCase();

  const hour = data?.jobHours && replaceUnderscore(data?.jobHours);
  const hourLower = hour && hour.toLocaleLowerCase();

  return (
    <>
      <div className=" container">
        <Image
          className=" mb-4"
          height={275}
          width={1310}
          src={data?.featureIamge}
          alt="job details Feature Image"
        />
        <Breadcrumbs data={breadCrumbsData} />
      </div>
      <section className="pt-6 lg:pt-[44px] pb-0 ">
        <div className="container">
          <div className=" grid lg:grid-cols-[1fr_417px] gap-[30px]">
            <div className="mb-5 lg:mb-[44px] lg:w-full w-[350px] md:w-[600px] ">
              <div>
                <h1 className="h4 mb-0">{data?.title}</h1>
                <h1 className="h5 mb-0 mt-[32px]">Job details</h1>
              </div>
              <div className=" h-[1px] w-full bg-[#EEEEEE] my-4"></div>
              <div className=" w-full flex flex-col gap-[8px]">
                <div className="font-medium">
                  Salary: {data?.salary ? data?.salary : "Nagotiable"}
                </div>

                <div className="font-medium">
                  Contractual hours: {data?.jobHours}
                </div>

                <div className="font-medium">Basis: {data?.jobHours}</div>

                <div className="font-medium">
                  <p className=" mb-0 line-clamp-1">
                    Package: Full details can be found here-
                    {<Link href={data?.jobSource}>{data?.jobSource}</Link>} 
                  </p>
                </div>

                <div className="font-medium capitalize">
                  Job category/type: {data?.jobType?.name}
                </div>

                <div className="font-medium capitalize">
                  Job reference: REQ000062
                </div>

                <div className="font-medium capitalize">
                  Attachments: Administrator (DEC) - JDPS - Mar 24.pdf
                </div>
                <h1 className="h5 mb-0 mt-[32px]">Job Description</h1>
                <div className=" h-[1px] w-full bg-[#EEEEEE] my-4"></div>
              </div>
              <div>{htmlParse(data?.jobDescription)}</div>
              <div className=" flex justify-between mt-[32px]">
                <a target="_blank" href={`${data?.jobSource}`}>
                  <button className=" btn btn-primary rounded py-[12px] px-[24px]">
                    Apply on website
                  </button>
                </a>
                <div className=" flex sm:items-center">
                  <SocialLinks classes={{ root: "mb-0 justify-center" }} />
                </div>
              </div>
            </div>
            <div className="">
              <div className=" border-[1px] border-t-[4px] rounded-md border-t-[#A965E9] shadow ">
                <div className=" py-[40px] px-[30px] grid gap-6">
                  <div>
                    <Image
                      height={110}
                      width={267}
                      className=" border-[1px] p-[30px] rounded"
                      alt="university Logo"
                      src={data?.universityLogo}
                    />
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Employer
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      {data?.universityName}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Location
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      {data?.location}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Salary
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      {data?.salary ? data?.salary : "Negotiable"}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Closing Date
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      {moment(data?.endDate).format("Do MMMM, YYYY")}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Job Type
                    </span>
                    <span className=" font-medium text-blue-400">
                      {data?.jobType?.name}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Contract Type
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      {data?.contractType}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Hours
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      {data?.jobHours}
                    </span>
                  </div>
                  <div className=" grid gap-[6px]">
                    <span className=" text-p4 text-[#4E4E4E] leading-[1.7]">
                      Share
                    </span>
                    <span className=" font-medium text-[#22343C]">
                      <SocialLinks />
                    </span>
                  </div>
                  <a target="_blank" href={`${data?.jobSource}`}>
                    <button className=" w-full btn btn-primary p-4 rounded transition-all">
                      Apply on website <FaExternalLinkAlt />
                    </button>
                  </a>
                </div>
              </div>
              <div className=" mt-[30px] w-auto">
                <AdvertisementSideSm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <JobsRecommendedTwo serverData={serverData} />
      {/* <MoreJob detailData={data} /> */}
    </>
  );
};

export default JobDetails;
