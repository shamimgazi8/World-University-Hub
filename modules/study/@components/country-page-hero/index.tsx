import Breadcrumbs from "@/modules/@common/breadcrumbs";
import Image from "next/image";

interface propTypes {
  classes?: {
    root?: string;
  };
  data: any;
}

const CountryPageHero = ({ data, classes }: propTypes) => {
  const LeftSide = ({ className }: any) => {
    return (
      <div
        className={`flex flex-col lg:items-start items-center text-center lg:text-left ${
          className ? className : ""
        }`}
      >
        {data?.title ? <h1 className="h3 mb-4">{data?.title}</h1> : null}
        {data?.breadcrumbData ? (
          <Breadcrumbs data={data?.breadcrumbData} classes={{ root: "mb-4" }} />
        ) : null}
        {data?.description ? (
          <p className="text-p2">{data?.description}</p>
        ) : null}
      </div>
    );
  };

  return (
    <section
      className={`bg-gradient-to-b from-primary-light to-secondary-light pt-8 md:pt-10 lg:pt-[60px]  ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="container">
        {data?.imageSrc || data?.videoSrc ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 items-center">
            <LeftSide />
            <div>
              {data?.videoSrc ? (
                <iframe
                  className="w-full rounded-lg aspect-video"
                  src={`https://www.youtube.com/embed/${data?.videoSrc}`}
                ></iframe>
              ) : (
                <Image
                  src={data?.imageSrc || "/misc/placeholder-country-lg.webp"}
                  alt={data?.title}
                  width={460}
                  height={500}
                  className="rounded-lg w-full object-cover"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-[800px] w-full mx-auto">
            <LeftSide className={"!items-center !text-center"} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryPageHero;
