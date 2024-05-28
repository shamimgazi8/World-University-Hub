import Link from "next/link";

const UniCourseCardCourses = ({ data, link }: any) => {
  return (
    <div className="flex flex-col gap-2 md:gap-0">
      <div className="py-2 px-3 grid-cols-[1fr_2fr] gap-5 bg-gradient-to-b from-primary-light to-secondary-light hidden md:grid">
        <div className="text-[#3B5AEF] font-medium">Course Name</div>
        <div className="grid grid-cols-4 gap-2">
          <div className="text-[#3B5AEF] font-medium">Duration</div>
          <div className="text-[#3B5AEF] font-medium">Level</div>
          <div className="text-[#3B5AEF] font-medium">Delivery Method</div>
          <div className="text-[#3B5AEF] font-medium">Campus</div>
        </div>
      </div>
      {data?.courses?.map((course: any, i: number) => {
        const dMethodFirst =
          course?.courseDeliveryMethods && course?.courseDeliveryMethods[0];
        const dMethodMore =
          course?.courseDeliveryMethods?.length > 1
            ? course?.courseDeliveryMethods.slice(1)
            : null;

        const campusFirst = course?.campuses?.length > 0 && course?.campuses[0];
        const campusMore =
          course?.campuses && course?.campuses?.length > 1
            ? course?.campuses.slice(1)
            : null;

        return (
          <div
            key={i}
            className={`py-2 md:py-4 px-3 grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-2 md:gap-5 border md:border-0 rounded-md ${
              i % 2 == 0 ? "lg:bg-grey" : ""
            }`}
          >
            <Link
              href={`${link}/courses/course-slug`}
              className="block group/coursetitle text-black text-sm"
            >
              <span className="group-hover/coursetitle:text-gradient transition-all font-medium">
                {course?.courseName}
              </span>
            </Link>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2 ">
                  <div className="text-sm col-span-2 block md:hidden mb-1 ">
                    Duration
                  </div>
                  <div className="font-medium text-sm col-span-2  md:font-normal">
                    {course?.duration}
                  </div>
                </div>

                <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                  <div className=" text-sm col-span-2 block md:hidden mb-1">
                    Level
                  </div>
                  <div className="font-medium text-sm col-span-2  md:font-normal">
                    {course?.levelName}
                  </div>
                </div>
                <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                  <div className=" text-sm col-span-2 block md:hidden mb-1">
                    Delivery Method
                  </div>
                  <div className="font-medium text-sm col-span-2 md:font-normal">
                    <div className="flex items-center gap-1">
                      {dMethodMore ? (
                        <>
                          <div>{dMethodFirst}</div>
                          <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                            +{dMethodMore?.length}
                            <div className="tooltip top">
                              {dMethodMore?.map((d: any, i: number) => {
                                return <div key={i}>{d}</div>;
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>{dMethodFirst ? dMethodFirst : "On Campus"}</>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                  <div className=" text-sm col-span-2 block md:hidden mb-1">
                    Campus
                  </div>
                  <div className="font-medium text-sm col-span-2 md:font-normal">
                    <div className="flex items-center gap-1">
                      {campusMore ? (
                        <>
                          <div>{campusFirst?.campusName?.split(",")[0]}</div>
                          <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                            +{campusMore?.length}
                            <div className="tooltip top">
                              {campusMore?.map((cmps: any, i: number) => {
                                return (
                                  <div key={i}>
                                    {cmps?.campusName?.split(",")[0]}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {campusFirst
                            ? campusFirst?.campusName?.split(",")[0]
                            : "Main Campus"}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UniCourseCardCourses;
