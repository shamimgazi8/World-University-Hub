import Image from "next/image";

const JobDetailsLogo = ({ data }: any) => {
  return (
    <>
      {data?.recruiterType == "UNIVERSITY" ? (
        <>
          {data?.university?.logo ? (
            <div className="mb-5 lg:mb-8 p-5 flex justify-center max-w-[250px] mx-auto items-center border bg-white">
              <Image
                src={data?.university?.logo}
                alt={data?.university?.name}
                width={220}
                height={50}
                className="object-contain w-full h-[50px]"
              />
            </div>
          ) : null}
        </>
      ) : (
        <>
          {data?.recruiter?.logo ? (
            <div className="mb-5 lg:mb-8 p-5 flex justify-center max-w-[250px] mx-auto items-center border bg-white">
              <Image
                src={data?.recruiter?.logo}
                alt={data?.recruiter?.name}
                width={220}
                height={50}
                className="object-contain w-full h-[50px]"
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default JobDetailsLogo;
