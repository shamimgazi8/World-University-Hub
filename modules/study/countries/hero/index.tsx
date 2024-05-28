import { excerpt } from "@/helpers/utils";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import Image from "next/image";
import Link from "next/link";

interface propTypes {
  data?: any;
}

const ContinentSingleHero = ({ data }: propTypes) => {
  const bgColor: any = {
    africa: "bg-[#F9AB47]",
    europe: "bg-[#FFC5F3]",
    oceania: "bg-[#4DB2C0]",
    south_america: "bg-[#063B00]",
    northern_america: "bg-[#483082]",
  };
  const badgeColor: any = {
    africa: "!text-[#F9AB47] bg-white",
    europe: "!text-[#FFC5F3] bg-white",
    oceania: "!text-[#4DB2C0] bg-white",
    south_america: "!text-[#063B00] bg-white",
    northern_america: "!text-[#483082] bg-white",
  };

  const textColor: any = {
    oceania: "!text-[#fff]",
    south_america: "!text-[#fff]",
    northern_america: "!text-[#fff]",
  };

  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Study Abroad",
      link: "/study-abroad",
    },
    {
      title: `${data?.name}`,
    },
  ];

  const LeftSide = ({ className }: any) => {
    return (
      <div
        className={`py-8 lg:py-[80px] flex flex-col lg:items-start items-center text-center lg:text-left ${
          className ? className : ""
        }`}
      >
        <div
          className={`mb-4 inline-block bg-primary text-white text-[20px] font-semibold px-2 py-[2px] rounded-sm ${
            badgeColor[data?.slug]
          }`}
        >
          {data?.name}
        </div>
        <h1 className={`h3 mb-5 ${textColor[data?.slug]}`}>
          Study in {data?.name}:{" "}
          <span className="block">Everything You Need to Know</span>{" "}
        </h1>
        <Breadcrumbs
          data={dataBreadcrumbs}
          classes={{
            root: " mb-5",
            link: `${textColor[data?.slug]}`,
            last: `${textColor[data?.slug]}`,
          }}
        />
        {data?.content && (
          <p className={`mb-8 ${textColor[data?.slug]}`}>
            {excerpt(data?.content, 500)}
          </p>
        )}
        <Link
          href={`/search?${data?.slug}`}
          className="btn btn-primary rounded"
        >
          Find A Program
        </Link>
      </div>
    );
  };

  return (
    <section
      className={`pb-0 mb-8 lg:mb-[80px] ${
        bgColor[data.slug] ? bgColor[data.slug] : "bg-[#DCE6FF]"
      }`}
    >
      <div className="container">
        {data?.bannerImage ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <LeftSide />
            <div className="">
              <Image
                src={
                  data?.bannerImage || "/misc/placeholder-continent-banner.jpg"
                }
                alt={data?.name}
                width={1280}
                height={1140}
                className=""
              />
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

export default ContinentSingleHero;
