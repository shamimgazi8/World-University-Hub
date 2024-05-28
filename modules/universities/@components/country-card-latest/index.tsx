import CompareButton from "@/modules/@common/compare-shortlist/compare";
import ShortListButton from "@/modules/@common/compare-shortlist/shortlist";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineBank } from "react-icons/ai";
import { BsBuildings, BsFillStarFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdLocationOn, MdOutlineSwapCalls } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { useState } from "react";

interface propTypes {
  data: any;
  countryName?: string;
  setValue?: any;
  classes?: {
    root?: string;
  };
}

const CountryCardLatest = ({ data, classes }: propTypes) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    window.location.replace(`/universities?countryName=${value}`);
  };
  const link = data?.slug ? `/universities/${data?.slug}` : "#";
  const numOfCampus = data && data?._count?.campus + 1;

  return (
    <div
      className={`flex flex-col gap-4 ${classes?.root ? classes?.root : ""}`}
    >
      <Link
        href={`${`/top-universities?countrySlug=${data?.slug}`}`}
        // onClick={handleSubmit}
        // () => setValue(`${data?.name}`)
        className="text-p1  text-body font-semibold hover:text-gradient inline-block"
      >
        {data?.name}
      </Link>
      <Link href={link}>
        <div className="w-[305px] h-[172px]">
          <Image
            src={data?.featureImage || "/misc/placeholder-country-sm.webp"}
            alt={data?.title}
            width={305}
            height={172}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Link href="" className="flex items-center gap-[6px] group">
          <AiOutlineBank className="text-lg group-hover:text-primary" />
          <p className="mb-0 group-hover:text-primary font-medium ">
            487 Universities
          </p>
        </Link>
        <div className="w-[2px] h-[80%]  bg-[#EEE]"></div>
        <Link href="" className="flex items-center gap-[6px] group ">
          <LuGraduationCap className="text-lg group-hover:text-primary" />
          <p className="mb-0 group-hover:text-primary font-medium">
            15,487 Courses
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CountryCardLatest;
