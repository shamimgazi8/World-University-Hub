import Image from "next/image";

const JobDetailsFeaturedImage = ({ data }: any) => {
  return (
    <>
      {data?.recruiterType == "UNIVERSITY" ? (
        <>
          {data?.university?.featureImage ? (
            <section className="pb-0">
              <div className="container">
                <Image
                  src={data?.university?.featureImage}
                  alt={data?.university?.name}
                  width={1310}
                  height={300}
                  className="max-full object-cover"
                />
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <>
          {data?.recruiter?.bannerImage ? (
            <section className="pb-0">
              <div className="container">
                <Image
                  src={data?.recruiter?.bannerImage}
                  alt={data?.recruiter?.name}
                  width={1310}
                  height={300}
                  className="max-full object-cover"
                />
              </div>
            </section>
          ) : null}
        </>
      )}
    </>
  );
};

export default JobDetailsFeaturedImage;
