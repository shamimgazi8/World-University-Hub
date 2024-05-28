import { htmlParse } from "@/helpers/utils";

interface propTypes {
  id?: string;
  data?: any;
}
const ProgramAdmissionRequirements = ({ id, data }: propTypes) => {
  return (
    <>
      {data?.admissionRequirement?.description ? (
        <div className="from_texteditor_wrapper mb-8">
          <h4 className="border-b h5 pb-4">Admission Requirements</h4>
          <div>{htmlParse(data?.admissionRequirement?.description)}</div>
        </div>
      ) : null}
    </>
  );
};

export default ProgramAdmissionRequirements;
