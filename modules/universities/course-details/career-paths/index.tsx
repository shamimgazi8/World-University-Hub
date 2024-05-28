import { htmlParse } from "@/helpers/utils";

interface propTypes {
  id?: string;
  data?: any;
}

const CareerPaths = ({ id, data }: propTypes) => {
  return (
    <>
      {data?.careerPaths?.description ? (
        <div id={id} className="from_texteditor_wrapper mb-8">
          <h5 className="border-b pb-4">Career Paths</h5>
          <div>{htmlParse(data?.careerPaths?.description)}</div>
        </div>
      ) : null}
    </>
  );
};

export default CareerPaths;
