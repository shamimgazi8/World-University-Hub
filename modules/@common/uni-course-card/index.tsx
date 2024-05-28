import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMapPin } from "react-icons/fi";
import { MdOutlineSwapCalls } from "react-icons/md";
import UniCourseCardCourses from "./courses";
import { excerpt, generateQueryString, htmlParse } from "@/helpers/utils";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useGetCoursesQuery } from "@/appstore/university/university-api";

interface propTypes {
  data?: any;
  showCourse?: boolean;
}

const UniCourseCard = ({ data, showCourse = true }: propTypes) => {
  const link = `/universities/${data?.slug}`;

  const uniqueNames: any = {};
  const uniqueArray: any = [];
  if (data && data?.uni_rankings?.length > 0) {
    for (const obj of data?.uni_rankings) {
      const name = obj.companySlug;
      if (!uniqueNames[name]) {
        uniqueNames[name] = true;
        uniqueArray.push(obj);
      }
    }
  }
  const queryParams = { uniSlug: data?.slug };
  const queryString = generateQueryString(queryParams);
  const {
    data: courseCount,
    isLoading,
    isError,
  } = useGetCoursesQuery(queryString);

  return (
    <div className="border p-3 lg:p-6  rounded lg:rounded-none">
      <div>
        <div className="grid  lg:grid-cols-[140px_1fr_auto] grid-cols-[140px_1fr]  items-center lg:gap-6   ">
          <Link
            href={link}
            className="p-3 w-full h-[80px] lg:h-[88px] lg:border self-start rounded-md lg:flex lg:items-center lg:justify-center"
          >
            <Image
              src={data?.logo || "/misc/placeholder-uni-logo.webp"}
              alt={data?.name}
              width={140}
              height={88}
              className="w-full h-full object-contain"
            />
          </Link>
          <div className="">
            {/* <div className="mb-5">
              {data?.name ? (
                <Link href={link} className="group/uni block">
                  <h3 className="text-[22px] mb-[2px]">
                    <span className="group-hover/uni:text-gradient transition-all">
                      {data?.name}
                    </span>
                  </h3>
                </Link>
              ) : null}
              {data?.countryName ? (
                <div className="flex items-center gap-2">
                  <FiMapPin />
                  <span>
                    {data?.cityName + ", "} {data?.countryName}
                  </span>
                </div>
              ) : null}
            </div> */}

            <div className="grid gap-2">
              <div
                className={`${
                  uniqueArray?.length === 0 ? "hidden" : ""
                } grid lg:grid-cols-[1fr_auto] gap-3 lg:gap-0  items-center order-last lg:order-first`}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:max-w-[90%] w-full mb-[6px] ">
                  {uniqueArray?.map((rnk: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className={` grid grid-cols-[16px_16px_16px] items-center gap-x-[6px] gap-y-[2px] border-r last:border-0`}
                      >
                        <Image
                          src={rnk?.logo}
                          alt={rnk?.companyName}
                          width={16}
                          height={16}
                          className="rounded object-cover"
                        />
                        <span className="m-0 text-xs justify-self-start	whitespace-nowrap">
                          {rnk?.shortName ? rnk?.shortName : rnk?.rcName}
                        </span>
                        <div className="font-medium justify-self-start	whitespace-nowrap">
                          <span className="text-gradient wh text-c5">
                            {rnk?.rankDisplay}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-3 lg:mt-3">
                  <button className="hover:text-primary">
                    <div className="relative ">
                      <MdOutlineSwapCalls className="lg:text-xl text-lg" />
                      <span className="absolute block top-[-7px] right-[-5px] lg:text-[10px] text-[6px] bg-gradient-to-r from-primary to-secondary text-white rounded-full py-[1px] px-[3px]">
                        3+
                      </span>
                    </div>
                  </button>
                  <button className="hover:text-primary">
                    <FiHeart className="lg:text-xl text-lg" />
                  </button>
                </div>
              </div>

              <div>
                <Link href={link} className="group/uni block">
                  <h3 className="lg:text-lg text-c4 leading-[1.4] mb-[5px]">
                    <span className="group-hover/uni:text-gradient transition-all">
                      {data?.name}
                    </span>
                  </h3>
                </Link>

                {data?.country ? (
                  <div className="flex items-center gap-2 text-c5 lg:text-c4">
                    <FiMapPin />
                    <span className=" ">
                      {data?.city + ", "} {data?.country}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* <div className="flex gap-3 mt-3">
          <button className="hover:text-primary">
            <div className="relative">
              <MdOutlineSwapCalls className="text-2xl" />
              <span className="absolute block top-[-7px] right-[-5px] text-[10px] bg-gradient-to-r from-primary to-secondary text-white rounded-full py-[1px] px-[3px]">
                3+
              </span>
            </div>
          </button>
          <button className="hover:text-primary">
            <FiHeart className="text-2xl" />
          </button>
        </div> 
        
        */}
        </div>
        <div className="w-full h-[1px] bg-[#eee] my-4"></div>
        <div>
          <p className="mb-0">{excerpt(data?.description, 300)}</p>
        </div>
        <div className="w-full h-[1px] bg-[#eee] my-4"></div>

        <div className=" col-span-3 w-full flex lg:justify-start justify-center gap-5 items-center lg:mt-0 mt-5">
          <span className="text-c4 font-semibold leading-[1.4]">
            Total Course {courseCount?.totalCount}
          </span>
          <Link href={`/universities/${data?.slug}/courses`}>
            <button className=" group lg:text-c4 text-c5 text-gradient flex items-center justify-center gap-2">
              Go to University Course Page{" "}
              <IoIosArrowRoundForward className=" lg:text-xl text-lg mt-1 text-gradient group-hover:scale-150 transition-all" />
            </button>
          </Link>
        </div>
      </div>

      {/* {data?.courseCount > 0 ? (
        <>
          {showCourse ? <UniCourseCardCourses data={data} link={link} /> : null}
          <div className="flex items-center justify-center mt-3 lg:mt-4">
            <Link
              href={`${link}/courses`}
              className="text-primary font-medium group/viewlink"
            >
              <span className="group-hover/viewlink:text-gradient transition-all">
                View All {data?.courseCount}{" "}
                {data?.courseCount > 1 ? "Courses" : "Course"}
              </span>
            </Link>
          </div>
        </>
      ) : null} */}
    </div>
  );
};

export default UniCourseCard;
