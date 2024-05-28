import Image from "next/image";
import Link from "next/link";

interface propTypes {
  universitySlug: string;
  data: any;
}

const CourseCard = ({ data, universitySlug }: propTypes) => {
  const link = `/universities/${universitySlug}/courses/${data?.courseTitle?.slug}`;
  const dMethodFirst =
    data && data?.deliveryMethods && data?.deliveryMethods[0];
  const dMethodMore =
    data && data?.deliveryMethods && data?.deliveryMethods?.length > 1
      ? data?.deliveryMethods.slice(1)
      : null;

  const campusFirst = data && data?.campuses?.length > 0 && data?.campuses[0];
  const campusMore =
    data && data?.campuses && data?.campuses?.length > 1
      ? data?.campuses.slice(1)
      : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2.4fr_auto] gap-3 py-4 border md:rounded-none rounded md:border-0 md:border-b items-center">
      <Link href={link || "#"} className="group/coursename">
        <h3 className="text-sm font-medium mb-0">
          <span className="group-hover/coursename:text-gradient">
            {data?.displayName}
          </span>
        </h3>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
        <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
          <Image
            src="/icons/clock.png"
            width={16}
            height={16}
            alt="Duration"
            className="object-contain max-w-[18px] shrink-0"
          />
          <div className="text-xs">Duration</div>
          <div className="font-medium text-sm col-span-2">
            {data?.duration ? data?.duration : "n/a"}
          </div>
        </div>

        <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
          <Image
            src="/icons/hat.png"
            width={18}
            height={18}
            alt="Level"
            className="object-contain max-w-[18px] shrink-0"
          />
          <div className="text-xs">Level</div>
          <div className="font-medium text-sm col-span-2">
            {data?.courseLevel?.name ? data?.courseLevel?.name : "n/a"}
          </div>
        </div>
        <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
          <Image
            src="/icons/training.png"
            width={16}
            height={16}
            alt="Delivery Method"
            className="object-contain max-w-[18px] shrink-0"
          />
          <div className="text-xs flex items-center gap-1">
            <span>Delivery Method</span>{" "}
            {dMethodMore ? (
              <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                +{dMethodMore?.length}
                <div className="tooltip top">
                  {dMethodMore?.map((d: any, i: number) => {
                    return <div key={i}>{d?.deliveryMethod?.name}</div>;
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <div className="font-medium text-sm col-span-2">
            {dMethodFirst ? dMethodFirst?.deliveryMethod?.name : "On Campus"}
          </div>
        </div>
        <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
          <Image
            src="/icons/campus.png"
            width={14}
            height={14}
            alt="Campus"
            className="object-contain max-w-[18px] shrink-0"
          />
          <div className="text-xs flex items-center gap-1">
            <span>Campus</span>
            {campusMore ? (
              <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                +{campusMore?.length}
                <div className="tooltip top">
                  {campusMore?.map((cmps: any, i: number) => {
                    return <div key={i}>{cmps?.title?.split(",")[0]}</div>;
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <div className="font-medium text-sm col-span-2">
            {campusFirst ? campusFirst?.title?.split(",")[0] : data?.location}
          </div>
        </div>
      </div>
      <div>
        <Link href={link || "#"} className="btn btn-primary rounded">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
