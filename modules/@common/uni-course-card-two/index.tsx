import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMapPin } from "react-icons/fi";
import { MdOutlineSwapCalls } from "react-icons/md";
import UniCourseCardCourses from "./courses";

interface propTypes {
  data?: any;
  showCourse?: boolean;
}

const UniCourseCardTwo = ({ data, showCourse = true }: propTypes) => {
  const link = `/universities/${data?.slug}`;

  const uniqueNames: any = {};
  const uniqueArray: any = [];
  if (data && data?.rankings?.length > 0) {
    for (const obj of data?.rankings) {
      const name = obj.companySlug;
      if (!uniqueNames[name]) {
        uniqueNames[name] = true;
        uniqueArray.push(obj);
      }
    }
  }

  return (
    <div className="border lg:border-0 lg:border-b p-3 lg:p-0 lg:pb-4 rounded lg:rounded-none">
      <div className="grid grid-cols-1 sm:grid-cols-[195px_1fr_auto] lg:grid-cols-[195px_1fr_auto] items-start lg:gap-[30px] mb-1 md:mb-5">
        <Link
          href={link}
          className="p-3 w-full h-[80px] lg:h-[122px] lg:border self-start rounded-md lg:flex lg:items-center lg:justify-center"
        >
          <Image
            src={data?.logo || "/misc/placeholder-uni-logo.webp"}
            alt={data?.name}
            width={193}
            height={70}
            className="w-full h-full object-contain"
          />
        </Link>
        <div>
          <div className="mb-5">
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
          </div>

          {uniqueArray?.length > 0 ? (
            <div className="mb-1">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:max-w-[90%] w-full">
                {uniqueArray?.map((rnk: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-[16px_auto] gap-x-[6px] gap-y-[2px] border-r last:border-0"
                    >
                      <Image
                        src={rnk?.logo}
                        alt={rnk?.companyName}
                        width={16}
                        height={16}
                        className="rounded object-cover"
                      />
                      <div className="m-0 text-[12px]">
                        {rnk?.companyShortName}
                      </div>
                      <div></div>
                      <div className="font-medium">
                        <span className="text-gradient">{rnk?.rankData}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex gap-3 mt-3">
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
      </div>

      {data?.courseCount > 0 ? (
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
      ) : null}
    </div>
  );
};

export default UniCourseCardTwo;
