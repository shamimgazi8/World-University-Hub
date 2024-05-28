import { replaceUnderscore } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";

interface propTypes {
  classes?: {
    root?: string;
  };
  data: any;
}
const JobCardtwo = ({ classes, data }: propTypes) => {
  const hour = data?.jobHours && replaceUnderscore(data?.jobHours);

  return (
    <Link className=" " href={`/jobs/${data?.slug}`}>
      <div
        className={`grid lg:grid-cols-[160px_1fr] group  gap-3 sm:gap-5 p-5 lg:p-[30px] rounded-lg border hover:shadow-one hover:border-transparent cursor-pointer  ${
          classes?.root ? classes.root : ""
        }`}
      >
        <div className="self-start">
          <Link href={`/jobs/${data?.slug}`}>
            {data?.recruiterType == "UNIVERSITY" ? (
              <Image
                src={data?.universityLogo || "/misc/placeholder-uni-logo2.webp"}
                alt={data?.universityName}
                width={322}
                height={140}
                className=" border-[1px] p-[20px]  rounded  object-cover"
              />
            ) : (
              <Image
                src={data?.universityLogo || "/misc/placeholder-uni-logo2.webp"}
                alt={data?.universityName}
                width={322}
                height={140}
                className=" border-[1px] p-[20px] rounded  object-cover"
              />
            )}
          </Link>
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="flex items-center justify-between">
            <h5 className="group-hover:text-gradient  mb-0 font-semibold text-[#22343C]  line-clamp-2 leading-[1.4]">
              {data?.title}
            </h5>
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
                  London (Greater) (GB), Hybrid
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
                  £35,000 - £40,000
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
              <p className="mb-0 text-p4 text-[#BF210E]">
                {" "}
                This pivotal role offers comprehensive administrative and
                organisational support to the Head of Department and faculty,
                facilitating ...
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <p className="mb-0 text-p3 text-[#4E4E4E] self-start">
                This pivotal role offers comprehensive administrative and
                organisational support to the Head of Department and faculty,
                facilitating ...
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default JobCardtwo;
