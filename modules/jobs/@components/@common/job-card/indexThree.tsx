import { replaceUnderscore } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";

interface propTypes {
  classes?: {
    root?: string;
  };
  data: any;
}
const JobCardthree = ({ classes, data }: propTypes) => {
  const hour = data?.jobHours && replaceUnderscore(data?.jobHours);
  const hourLower = hour && hour.toLocaleLowerCase();

  return (
    <div
      className={`grid  gap-3 sm:gap-5 p-5 lg:p-[30px] rounded-lg border hover:shadow-one hover:border-transparent  ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="self-start">
        <Link href={`/jobs/${data?.slug}`}>
          {data?.recruiterType == "UNIVERSITY" ? (
            <Image
              src={data?.universityLogo || "/misc/placeholder-uni-logo2.webp"}
              alt={data?.universityName}
              width={122}
              height={40}
              className="rounded-lg object-cover"
            />
          ) : (
            <Image
              src={data?.universityLogo || "/misc/placeholder-uni-logo2.webp"}
              alt={data?.universityName}
              width={122}
              height={40}
              className="rounded-lg object-cover"
            />
          )}
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link href={`/jobs/${data?.slug}`}>
            <h5 className=" mb-0 font-semibold text-[#22343C] hover:text-gradient line-clamp-2 leading-[1.4]">
              {data?.title}
            </h5>
          </Link>
          {/* <button type="button" className="hover:text-primary">
            <FiHeart size={20} />
          </button> */}
        </div>
        <div className="flex flex-col items-start gap-[10px] flex-wrap ">
          {data?.recruiterType == "UNIVERSITY" ? (
            <>
              {data?.universityName ? (
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/job/recruiter.png"
                    alt="recruiter"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <p className="text-c3 text-heading font-medium mb-0">
                    Times Higher Education
                  </p>

                  {/* <span>{data?.universityName}</span> */}
                </div>
              ) : null}
            </>
          ) : (
            <>
              {data?.recruiter?.name ? (
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/job/recruiter.png"
                    alt="recruiter"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <p className="text-c3 text-heading font-medium mb-0">
                    London (Greater) (GB), Hybrid
                  </p>
                  {/* <span>{data?.recruiter?.name}</span> */}
                </div>
              ) : null}
            </>
          )}
          {data?.location ? (
            <div className="flex items-center gap-2">
              <Image
                src="/icons/job/location.png"
                alt="location"
                width={16}
                height={16}
                className="shrink-0"
              />
              <p className="text-c3 text-heading font-medium mb-0">
                {data?.location}
              </p>
            </div>
          ) : null}

          {data?.salary ? (
            <div className="flex items-center gap-2">
              <Image
                src="/icons/job/salary.png"
                alt="salary"
                width={16}
                height={16}
                className="shrink-0"
              />
              <p className="text-c3 text-heading font-medium mb-0">
                {data?.salary}
              </p>
              {/* <div>{data?.salary}</div> */}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Image
                src="/icons/job/salary.png"
                alt="salary"
                width={16}
                height={16}
                className="shrink-0"
              />
              <p className="text-c3 text-heading font-medium mb-0">
                £35,000 - £40,000
              </p>
              {/* <div>{data?.salary}</div> */}
            </div>
          )}
        </div>
        {data?.description ? (
          // <div className="flex items-center gap-3 sm:gap-5 mt-3 flex-wrap">
          //   <span className="bg-[#DDE8F8] text-primary px-4 inline-block py-1 rounded-full capitalize">
          //     {/* {hourLower} */}
          //   </span>
          // </div>
          <div className="flex items-center gap-3 sm:gap-5 mt-3 flex-wrap">
            <p className="mb-0 text-p4 text-[#BF210E]">6 day left</p>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-5 mt-3 flex-wrap">
            <p className="mb-0 text-p4 text-[#BF210E]">6 day left</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCardthree;
