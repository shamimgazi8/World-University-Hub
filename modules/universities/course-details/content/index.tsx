import { htmlParse } from "@/helpers/utils";

interface propTypes {
  id?: string;
  data?: any;
}

const ProgramContent = ({ id, data }: propTypes) => {
  return (
    <>
      {data?.programData?.description ? (
        <div id={id} className="from_texteditor_wrapper mb-8">
          <h5 className="border-b pb-4">Programs Content</h5>
          <div>{htmlParse(data?.programData?.description)}</div>
        </div>
      ) : null}
    </>
  );
};

export default ProgramContent;
