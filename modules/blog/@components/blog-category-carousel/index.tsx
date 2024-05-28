"use client";

import { useGetCategoryQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

interface propTypes {
  classes?: {
    root?: string;
  };
}
const bgColor = [
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
];
const BlogCategoryCarousel = ({}: propTypes) => {
  const [isHovered, setIsHovered] = useState(false);
  const [id, setid] = useState(0);

  const {
    data: catData,
    isLoading,
    isError,
  } = useGetCategoryQuery({ limit: 6 });
  const data = catData?.data;
  const len = catData?.data?.length;

  return (
    <section className=" py-[60px]">
      {isLoading ? (
        <div className="container">
          <Link href={"/"}>
            <h1 className=" text-h3-md mb-0 hover:underline">Categories</h1>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 pt-[60px]">
            {new Array(6).fill(1).map((_, i) => {
              return <Skeleton key={i} className={"h-[210px] w-[180px]"} />;
            })}
          </div>
        </div>
      ) : (
        <div className=" container">
          <Link href={"/blog/category"}>
            <h1 className=" text-h3-md mb-0 hover:underline">Categories</h1>
          </Link>
          <div className=" grid lg:grid-cols-6 grid-cols-2 gap-[30px]">
            {data?.map((data: any, i: any) => {
              console.log(i, "i");

              const itemFormatted = {
                hoverBackground: bgColor[i],
              };
              return (
                <div className=" ">
                  <div className="mt-[32px] w-[165px] lg:w-[193px] relative hover:scale-[1.1] transition-all  ">
                    <Image
                      src={`${
                        data?.featuredImage
                          ? data?.featuredImage
                          : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                      }`}
                      alt={data?.name}
                      width={193}
                      height={200}
                      className="object-cover h-[200px] rounded"
                    />
                    <Link href={`/blog/category/${data?.slug}`}>
                      <div
                        style={{
                          background:
                            id == i && isHovered
                              ? itemFormatted?.hoverBackground
                              : "",
                        }}
                        onMouseEnter={() => {
                          setIsHovered(true);
                          setid(i);
                        }}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`${
                          id == i
                            ? `hover:bg-${itemFormatted?.hoverBackground}`
                            : ``
                        } transition-all   bg-gradient-to-b from-[#fefefe4d] to-[#000000db] absolute inset-0 flex justify-center items-end  bg-opacity-50 text-white text-center rounded `}
                      >
                        <p className="text-c2 cursor-pointer">{data?.name}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogCategoryCarousel;
