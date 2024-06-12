"use client";
import { useGetUniversityCampusQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import { Collapse } from "antd";
import { FiMinus, FiPlus } from "react-icons/fi";

interface propTypes {
  universitySlug: string;
  universityName?: string | any;
  id?: string;
  className?: string;
}

const SectionUniversityCampus = ({
  id,
  className,
  universitySlug,
  universityName,
}: propTypes) => {
  const queryString = generateQueryString({ uniSlug: universitySlug });
  const { data, isLoading, isError } = useGetUniversityCampusQuery(queryString);

  const dataArr = data && data?.data;
  const len = data && dataArr?.length;

  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="flex flex-col gap-5">
            {new Array(3).fill(1).map((_, i) => {
              return (
                <Skeleton
                  key={i}
                  className={i == 0 ? "h-[500px]" : "h-[50px]"}
                />
              );
            })}
          </div>
        </section>
      ) : (
        <>
          {len > 0 && (
            <section id={id} className={`pb-8 ${className ? className : ""}`}>
              <div className=" mb-5">
                <h3 className="h5">Campus Locations</h3>
              </div>
              <div className="contact-collapse flex flex-col gap-4">
                <div className=" flex gap-3 flex-wrap">
                  {dataArr?.map((item: any, i: any) => {
                    return (
                      <button className=" btn btn-primary-outline rounded">
                        {item?.title}
                      </button>
                    );
                  })}
                </div>
                {dataArr?.slice(1, 2)?.map((cmp: any, i: any) => {
                  const map = `https://maps.google.com/maps?q=${universityName},${cmp?.description}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
                  return (
                    <iframe
                      className="w-full h-[250px] lg:h-[450px]"
                      src={map}
                    />
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default SectionUniversityCampus;
