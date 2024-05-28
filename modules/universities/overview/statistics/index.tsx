import { htmlParse } from "@/helpers/utils";
interface propTypes {
  data?: any;
  id?: string;
  className?: string;
}

const UniversityOverviewStatistics = ({ id, className, data }: propTypes) => {
  return (
    <>
      {data?.statistics ? (
        <section
          id={id}
          className={`pb-10 university_statistics ${
            className ? className : ""
          }`}
        >
          <h2 className="h5 border-b pb-4">Key Statistics</h2>
          <div>{htmlParse(data?.statistics)}</div>
        </section>
      ) : null}
    </>
  );
};

export default UniversityOverviewStatistics;
