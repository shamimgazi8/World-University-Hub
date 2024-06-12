import CompareButton from "@/modules/@common/compare-shortlist/compare";
import ShortListButton from "@/modules/@common/compare-shortlist/shortlist";
import Image from "next/image";
import Link from "next/link";
import { BsBuildings, BsFillStarFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdLocationOn, MdOutlineSwapCalls } from "react-icons/md";

interface propTypes {
  data: any;
  countryName?: string;
  classes?: {
    root?: string;
  };
}

const UniversityCard = ({ data, classes }: propTypes) => {
  const link = data?.slug ? `/universities/${data?.slug}` : "#";
  const numOfCampus = data && data?._count?.campus + 1;

  return (
    <div
      className={`p-5 shadow-one rounded-lg flex flex-col d ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="flex justify-between">
        <Link href={link}>
          <div className="px-4 py-3 border h-[60px] flex datas-center justify-center">
            <Image
              src={data?.logo || "/misc/placeholder-uni-logo.webp"}
              alt={data?.name}
              width={96}
              height={24}
              className="object-contain h-full"
            />
          </div>
        </Link>
        <div className="">
          <div className="flex datas-center justify-start gap-4">
            {/* <div className="cursor-pointer hover:text-primary">
              <span className="block relative">
                <CompareButton
                  reference={"UNIVERSITY"}
                  universitySlug={data?.slug}
                />
              </span>
            </div> */}
            <div className="cursor-pointer hover:text-primary">
              <span className="block relative">
                <ShortListButton
                  reference={"UNIVERSITY"}
                  universitySlug={data?.slug}
                />
              </span>
            </div>
            {/* <button className="cursor-pointer hover:text-primary">
              <FiHeart size={25} />
            </button> */}
          </div>
        </div>
      </div>
      <Link
        href={link}
        className="text-p1 py-3 text-body font-semibold hover:text-gradient inline-block"
      >
        {data?.name}
      </Link>
      {data?.country && (
        <div className="flex datas-center gap-1">
          <MdLocationOn className="text-[#3B5AEF] mt-[2px]" />
          <span className="text-p4">
            {data?.city?.name ? `${data?.city?.name},` : ""}{" "}
            {data?.country?.name}
          </span>
        </div>
      )}
      {/* <div className="flex datas-center gap-3 pt-3">
        <div className="flex datas-center gap-1">
          <BsBuildings color="#FF6600" />
          <span className="text-sm">
            {numOfCampus > 1 ? `${numOfCampus} Campuses` : "1 Campus"}
          </span>
        </div>
        <div className="flex datas-center gap-1">
          <BsFillStarFill color="#FFB636" />
          <span className="text-sm">
            {data?._count?.reviews > 1
              ? `${data?._count?.reviews} Reviews`
              : `${data?._count?.reviews} Review`}
          </span>
        </div>
      </div> */}

      <div className="grid grid-cols-2 pt-5 mb-5">
        {data?.ranking?.slice(0, 4).map((rnk: any, i: number) => {
          return (
            <div
              key={i}
              className="flex gap-2 h-full border justify-center py-2 px-3 w-full"
            >
              <div className="mt-[6px]">
                <Image
                  src={
                    rnk?.company?.logoSource ||
                    "/misc/image-placeholder-big.webp"
                  }
                  alt={rnk?.company?.name}
                  width={16}
                  height={16}
                  className="rounded object-cover"
                />
              </div>
              <div>
                <span className="m-0 text-[12px]">
                  {rnk?.company?.shortName}
                </span>
                <div className="h6 mb-0 text-gradient font-medium text-lg">
                  {rnk?.rankDisplay}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link href={link} className="btn btn-primary w-full  rounded mt-auto">
        View University
      </Link>
    </div>
  );
};

export default UniversityCard;
