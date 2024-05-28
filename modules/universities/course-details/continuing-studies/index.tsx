import { htmlParse } from "@/helpers/utils";

interface propTypes {
  id?: string;
  data?: any;
}

const ContinuingStudies = ({ id, data }: propTypes) => {
  return (
    <>
      {data?.continuingStudies?.description ? (
        <div id={id} className="from_texteditor_wrapper mb-8">
          <h5 className="border-b pb-4">Continuing studies</h5>
          <div>{htmlParse(data?.continuingStudies?.description)}</div>
        </div>
      ) : null}
    </>
  );
};

export default ContinuingStudies;
