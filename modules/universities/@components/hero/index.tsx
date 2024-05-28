import ShowRanking from "@/modules/@common/show-ranking";
import Image from "next/image";
import { BsBuildings } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdLocationOn, MdOutlineCompareArrows } from "react-icons/md";

interface propTypes {
  data?: any;
  isFeaturedImage?: boolean;
}

const UniversityHero = ({ data, isFeaturedImage = false }: propTypes) => {
  const numOfCampus = data && data?._count?.campus;

  return (
    <>
      <div className="relative bg-gradient-to-b from-primary-light to-secondary-light py-5 lg:py-7">
        <Image
          src={data?.featureImage || "/misc/university-placeholder.jpg"}
          alt={data?.name}
          title={data?.name}
          width={3000}
          height={300}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.8))",
          }}
        ></div>

        <div className="container relative z-10">
          <div className="grid  lg:grid-cols-[190px_1fr] grid-cols-[100px_1fr] lg:items-center items-start gap-4 lg:gap-6 py-7 lg:py-10 md:py-10 relative">
            <div className="lg:w-full w-[100px] lg:h-full bg-white flex flex-col justify-center items-center border rounded-md p-4 row-span-2">
              <Image
                src={data?.logo || "/misc/placeholder-uni-logo.webp"}
                alt={data?.name}
                title={data?.name}
                width={500}
                height={300}
                className="max-h-[60px] object-contain"
              />
            </div>
            <div className=" ">
              <h1 className="h4 mb-[6px] text-white">{data?.name}</h1>
              <div className="flex items-center gap-2 md:gap-4 flex-wrap text-white">
                {data?.country && (
                  <div className="flex items-center gap-1">
                    <MdLocationOn />
                    <span className="text-sm">
                      {data?.city?.name ? data?.city?.name + "," : ""}{" "}
                      {data?.country?.name}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <BsBuildings />
                  <span className="text-sm">
                    {numOfCampus > 1 ? `${numOfCampus} Campuses` : "1 Campus"}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <ShowRanking
                className={{ content_wrapper: "h-[20px]" }}
                universitySlug={data?.slug}
              />
            </div>
            <div className=" lg:flex grid gap-4 col-span-2">
              <button className=" btn btn-primary px-[20px] py-[10px] rounded">
                Request More Details
              </button>
              <button className=" bg-white  font-medium  px-[20px] py-[10px] rounded flex items-center gap-1 hover:bg-purple-500 hover:text-white transition-all">
                <IoMdHeartEmpty /> Shortlist
              </button>
              <button className="bg-white  font-medium px-[20px] py-[10px] rounded  flex items-center gap-1 hover:bg-purple-500 hover:text-white transition-all">
                <MdOutlineCompareArrows /> Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityHero;
