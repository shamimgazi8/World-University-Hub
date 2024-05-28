import Image from "next/image";

const JobDetailsRecruiter = ({ data }: any) => {
  return (
    <>
      {data?.recruiterType == "UNIVERSITY" ? (
        <>
          {data?.universityName ? (
            <div className="grid  gap-3">
           
              <div className="font-medium">{data?.universityName}</div>
            </div>
          ) : null}
        </>
      ) : (
        <>
          {data?.recruiter?.name ? (
            <div className="grid  gap-3">
           
              <div className="font-medium">{data?.recruiter?.name}</div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default JobDetailsRecruiter;
