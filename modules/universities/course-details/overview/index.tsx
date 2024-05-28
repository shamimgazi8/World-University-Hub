import Image from "next/image";
import StartDates from "./start-dates";
import ContactInstitute from "./contact";
import { TbLanguage } from "react-icons/tb";
import { TfiAlarmClock } from "react-icons/tfi";
import { replaceUnderscore } from "@/helpers/utils";
interface propTypes {
  data?: any;
  dataCourse?: any;
  id?: string;
}

const ProgramOverview = ({ id, data, dataCourse }: propTypes) => {
  const dMethodFirst =
    dataCourse && dataCourse?.deliveryMethods && dataCourse?.deliveryMethods[0];
  const dMethodMore =
    dataCourse &&
    dataCourse?.deliveryMethods &&
    dataCourse?.deliveryMethods?.length > 1
      ? dataCourse?.deliveryMethods.slice(1)
      : null;
  const dMoreData = dataCourse && dataCourse?.deliveryMethods;

  const hasSemiser = data && data?.semesters?.length > 0 ? true : false;

  return (
    <section
      id={id}
      className="bg-grey p-7 self-start rounded-md mb-5 lg:mb-10"
    >
      <h2 className="h5">Program Overview</h2>
      <div className="grid border rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-b border-r p-4">
          <div className="flex text-sm items-center gap-2">
            <Image
              src="/icons/hat-grey.png"
              alt="Program level"
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Level</span>
          </div>
          <span className="text-gradient text-[20px] font-semibold">
            {dataCourse?.courseLevel?.name
              ? dataCourse?.courseLevel?.name
              : "N/A"}
          </span>
        </div>

        <div className="border-r border-b p-4">
          <div className="flex text-sm items-center gap-2">
            <TfiAlarmClock className="text-lg" />
            <span>Study Pace</span>
          </div>
          <span className="text-gradient text-[20px] font-semibold capitalize">
            {dataCourse?.studyPace
              ? replaceUnderscore(dataCourse?.studyPace)?.toLowerCase()
              : "N/A"}
          </span>
        </div>

        <div className="border-b p-4">
          <div className="flex text-sm items-center gap-2">
            <TbLanguage className="text-lg" />
            <span>Language</span>
          </div>
          <span className="text-gradient text-[20px] font-semibold">
            {dataCourse?.language ? dataCourse?.language : "N/A"}
          </span>
        </div>

        <div className="border-r p-4">
          <div className="flex text-sm items-center gap-2">
            <Image
              src="/icons/clock-grey.png"
              alt="Program duration"
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Duration</span>
          </div>
          <span className="text-gradient text-[20px] font-semibold">
            {dataCourse?.duration ? dataCourse?.duration : "N/A"}
          </span>
        </div>

        <div className="border-r p-4">
          <div className="flex text-sm items-center gap-2">
            <Image
              src="/icons/training-grey.png"
              alt="Program delivery"
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Delivery Method</span>
            {dMethodMore ? (
              <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                +{dMethodMore?.length}
                <div className="tooltip top">
                  {dMoreData?.map((d: any, i: number) => {
                    return <div key={i}>{d?.deliveryMethod?.name}</div>;
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gradient text-[20px] font-semibold">
              {dMethodFirst ? dMethodFirst?.deliveryMethod?.name : "On Campus"}
            </span>
          </div>
        </div>

        <div className={`p-4 ${hasSemiser ? "border-r " : ""}`}>
          <div className="flex text-sm items-center gap-2">
            <Image
              src="/icons/hat-with-dollar-grey.png"
              alt="Program delivery"
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Scholarship</span>
          </div>
          <span className="text-gradient text-[20px] font-semibold">
            {dataCourse?.hasScholarship ? "Available" : "Not Available"}
          </span>
        </div>

        {/* <div className="col-span-2 p-4">
          <StartDates data={dataCourse} />
        </div> */}
      </div>
      <div className="flex items-center flex-wrap gap-4 mt-6 pb-1">
        <a
          rel="nofollow"
          target="_blank"
          href={
            dataCourse?.courseGuide
              ? dataCourse?.courseGuide
              : dataCourse?.sourceUrl
          }
          className="btn btn-outline !border-[#eee] rounded"
        >
          Visit Program Webpage
        </a>
        <ContactInstitute data={dataCourse} />
      </div>
    </section>
  );
};

export default ProgramOverview;
