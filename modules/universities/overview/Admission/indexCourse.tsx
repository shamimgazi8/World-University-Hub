import React from "react";

const AdmissionReqCourse = ({ id, data }: any) => {
  interface ExamScore {
    exam: {
      name: string;
      slug: string;
    };
    score: string;
  }

  interface TransformedDataItem {
    admissionType: string;
    examScores: ExamScore[];
  }
  function transformData(
    data: { exam: string; score: string; admissionType: string }[]
  ): TransformedDataItem[] {
    const admissionTypeMap: Record<string, TransformedDataItem> = {};

    // Group data by admission type
    data.forEach((item) => {
      const admissionType = item.admissionType.toUpperCase(); // Ensure consistent case

      if (!admissionTypeMap[admissionType]) {
        admissionTypeMap[admissionType] = {
          admissionType,
          examScores: [],
        };
      }

      admissionTypeMap[admissionType].examScores.push({
        exam: {
          name: item.exam,
          slug: item.exam.toLowerCase(), // Ensure consistent slug format
        },
        score: item.score,
      });
    });

    // Convert map to desired array format
    return Object.values(admissionTypeMap);
  }
  const transformedData = transformData(data?.examScores);

  return (
    <section id={id} className=" pb-0">
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">Admission Requirement & Others</h5>
        <div>
          <h6 className=" mb-4">Exam Scores</h6>
          <div className=" border grid divide-y ">
            {transformedData?.map((item: any, i: any) => {
              return (
                <div key={i} className=" grid grid-cols-6 p-3">
                  <p className=" mb-0 lg:text-c4 text-c5">
                    {item?.admissionType}
                  </p>
                  {item?.examScores?.length > 0
                    ? item?.examScores?.map((item: any, i: any) => {
                        return (
                          <div key={i}>
                            <p className=" mb-0 lg:text-c4 text-c5">
                              {item?.exam?.name}: {item?.score}
                            </p>
                          </div>
                        );
                      })
                    : "N/A"}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h6 className=" mb-4">Admission Date</h6>
          <div className=" flex justify-between  gap-[8px]  p-4 border rounded">
            <div>
              <p className=" mb-0 lg:text-c4 text-c5">Program Duration</p>
              <span className=" mb-0 lg:text-c2 text-c3 font-medium">
                {data?.duration ? `${data?.duration} Year` : "N/A"}
              </span>
            </div>
            <div>
              <p className=" mb-0 lg:text-c4 text-c5">Start Month</p>
              <span className=" mb-0 lg:text-c2 text-c3  font-medium">
                {data?.importantDates?.startingMonth?.join(", ")}
              </span>
            </div>
            <div>
              <p className=" mb-0 lg:text-c4 text-c5">End Month</p>
              <span className=" mb-0 lg:text-c2 text-c3  font-medium">
                {data?.importantDates?.endMonth?.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionReqCourse;
