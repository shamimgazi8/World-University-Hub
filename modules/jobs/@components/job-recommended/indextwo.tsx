import JobCardtwo from "../@common/job-card";
import JobCardthree from "../@common/job-card/indexThree";

const JobsRecommendedTwo = ({ serverData }: any) => {
  const total = serverData?.totalCount;
  const dataArr = serverData?.data;

  return (
    <>
      {total > 0 ? (
        <section>
          <div className="container">
            <div>
              <h4 className="mb-5 text-center">Recommended Jobs</h4>
              <div className="grid lg:grid-cols-3 gap-5 lg:gap-7">
                {dataArr?.map((item: any, i: number) => {
                  return (
                    <JobCardthree
                      classes={{ root: "grid-cols-1" }}
                      data={item}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default JobsRecommendedTwo;
