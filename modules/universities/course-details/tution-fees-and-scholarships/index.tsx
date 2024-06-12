import { htmlParse } from "@/helpers/utils";

interface propTypes {
  id?: string;
  data?: any;
}

const TutionFeesAndScholarships = ({ id, data }: propTypes) => {
  return (
    <div id={id}>
      <div className="from_texteditor_wrapper ">
        <div className="mb-8">
          <h5 className="border-b pb-4">Scholarship & Funding</h5>
          {data?.scholarship ? (
            <p className="">
              Several scholarship options are available. Please check the{" "}
              <a
                rel="nofollow"
                target="_blank"
                href={data?.sourceUrl}
                className="font-medium"
              >
                university website
              </a>{" "}
              for more information.
            </p>
          ) : (
            <p>Scholarship options are not available</p>
          )}
        </div>
        {data?.tuitionFee?.content ? (
          <div className="from_texteditor_wrapper mb-8">
            {htmlParse(data?.tuitionFee?.content)}
          </div>
        ) : null}
      </div>

      {data?.qualification?.description ? (
        <div className="from_texteditor_wrapper mb-8">
          <h5 className="border-b pb-4">Qualification</h5>
          <div>{htmlParse(data?.qualification?.description)}</div>
        </div>
      ) : null}
    </div>
  );
};

export default TutionFeesAndScholarships;
