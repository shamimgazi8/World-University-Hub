import CompareButton from "@/modules/@common/compare-shortlist/compare";
import ShortListButton from "@/modules/@common/compare-shortlist/shortlist";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineSwapCalls } from "react-icons/md";

interface propTypes {
  classes?: {
    root?: string;
    overlay?: string;
  };
  data: any;
}
const ViewCourseCard = ({ classes, data }: propTypes) => {
  const link = `/universities/${data?.university?.slug}/courses/${data?.courseTitle?.slug}`;
  const dMethodFirst =
    data && data?.deliveryMethods && data?.deliveryMethods[0];
  const dMethodMore =
    data && data?.deliveryMethods && data?.deliveryMethods?.length > 1
      ? data?.deliveryMethods.slice(1)
      : null;

  const campusFirst = data && data?.campuses?.length > 0 && data?.campuses[0];
  const campusMore =
    data && data?.campuses && data?.campuses?.length > 1
      ? data?.campuses.slice(1)
      : null;

  return (
    <div
      className={`p-6 block group hover:shadow-two transition-shadow rounded-[10px] bg-white hover:text-inherit h-full ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="flex items-center">
        <h3 className="text-lg mb-2 line-clamp-1">
          <span className="group-hover:text-gradient transition-all">
            <Link href={link}>{data?.displayName}</Link>
          </span>
        </h3>
        <div className="">
          <div className="flex datas-center justify-start gap-4">
            <div className="cursor-pointer hover:text-primary">
              <span className="block relative">
                <CompareButton
                  reference={"COURSE"}
                  universitySlug={data?.university?.slug}
                  courseTitleSlug={data?.courseTitle?.slug}
                />
              </span>
            </div>
            <div className="cursor-pointer hover:text-primary">
              <span className="block relative">
                <ShortListButton
                  reference={"COURSE"}
                  universitySlug={data?.university?.slug}
                  courseTitleSlug={data?.courseTitle?.slug}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href={link} className="hover:text-inherit">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/icons/university.png"
            width={18}
            height={18}
            alt={data?.university?.name}
            title={data?.university?.name}
            className="object-contain max-w-[18px] shrink-0"
          />
          <span>{data?.university?.name}</span>
        </div>

        <div className="grid grid-cols-2 gap-[10px] items-start">
          <div className="grid grid-cols-[16px_1fr] gap-2">
            <Image
              src="/icons/clock.png"
              width={16}
              height={16}
              alt="Duration"
              className="object-contain max-w-[18px] shrink-0"
            />
            <div className="text-sm">Duration</div>
            <div></div>
            <div className="font-medium">
              {data?.duration ? data?.duration : "n/a"}
            </div>
          </div>

          <div className="grid grid-cols-[16px_1fr] gap-2">
            <Image
              src="/icons/hat.png"
              width={18}
              height={18}
              alt="Level"
              className="object-contain max-w-[18px] shrink-0"
            />
            <div className="text-sm">Level</div>
            <div></div>
            <div className="font-medium">
              {data?.courseLevel?.name ? data?.courseLevel?.name : "n/a"}
            </div>
          </div>
          <div className="grid grid-cols-[16px_1fr] gap-2">
            <Image
              src="/icons/training.png"
              width={16}
              height={16}
              alt="Delivery Method"
              className="object-contain max-w-[18px] shrink-0"
            />
            <div className="text-sm flex items-center gap-1">
              <span>Delivery Method</span>
              {dMethodMore ? (
                <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                  +{dMethodMore?.length}
                  <div className="tooltip top">
                    {dMethodMore?.map((d: any, i: number) => {
                      return <div key={i}>{d?.deliveryMethod?.name}</div>;
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <div></div>
            <div className="font-medium">
              {dMethodFirst ? dMethodFirst?.deliveryMethod?.name : "On Campus"}
            </div>
          </div>
          <div className="grid grid-cols-[16px_1fr] gap-2">
            <Image
              src="/icons/campus.png"
              width={14}
              height={14}
              alt="Campus"
              className="object-contain max-w-[18px] shrink-0"
            />
            <div className="text-sm">
              <span>Campus</span>
              {campusMore ? (
                <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                  +{campusMore?.length}
                  <div className="tooltip top">
                    {campusMore?.map((cmps: any, i: number) => {
                      return <div key={i}>{cmps?.title?.split(",")[0]}</div>;
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <div></div>
            <div className="font-medium line-clamp-1">
              {campusFirst ? campusFirst?.title?.split(",")[0] : "Main Campus"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ViewCourseCard;
