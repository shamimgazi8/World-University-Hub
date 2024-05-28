import { htmlParse } from "@/helpers/utils";

interface propTypes {
  id?: string;
  data?: any;
}

const ProgramDescription = ({ id, data }: propTypes) => {
  return (
    <>
      {data?.courseInfo?.description ? (
        <div id={id} className="from_texteditor_wrapper mb-8">
          <h3 className="border-b h5 pb-4">Programs Description</h3>
          <div>{htmlParse(data?.courseInfo?.description)}</div>
        </div>
      ) : null}
    </>
  );
};

export default ProgramDescription;
