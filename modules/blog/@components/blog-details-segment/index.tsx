"use client";

import { htmlParse } from "@/helpers/utils";
import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import dynamic from "next/dynamic";
import Link from "next/link";
import BlogDetailsFaq from "./faq";
import BlogRightSideCategory from "./right-side-category";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdModeComment, MdSend } from "react-icons/md";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import BlogRightSideTwo from "../right-side-two";
import { FaTwitter } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import SocialLinks from "@/modules/@common/social-links";

const SocialShare = dynamic(() => import("@/modules/@common/social-share"), {
  ssr: false,
});

const commentsData = [
  {
    imgSrc: "/misc/",
    title: "Mr. Anderson",
    dayCount: "1 Day ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum sed libero nunc et vitae, nulla purus gravida. Purus amet arcu et malesuada aenean quis dolor eget enim. Morbi nibh fringilla id in. Faucibus dignissim convallis purus quam.",
  },
  {
    imgSrc: "/misc/",
    title: "Mr. Anderson",
    dayCount: "1 Day ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum sed libero nunc et vitae, nulla purus gravida. Purus amet arcu et malesuada aenean quis dolor eget enim. Morbi nibh fringilla id in. Faucibus dignissim convallis purus quam.",
  },
  {
    imgSrc: "/misc/",
    title: "Mr. Anderson",
    dayCount: "1 Day ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum sed libero nunc et vitae, nulla purus gravida. Purus amet arcu et malesuada aenean quis dolor eget enim. Morbi nibh fringilla id in. Faucibus dignissim convallis purus quam.",
    isChild: true,
  },
];

const BlogDetailsSegment = ({ data }: any) => {
  // const catSlug = data && data?.categories[0].slug;
  const id = data && data?.id;
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    const allh1 = document.querySelectorAll(".from_texteditor_wrapper h1");
    const allh2 = document.querySelectorAll(".from_texteditor_wrapper h2");
    const allh3 = document.querySelectorAll(".from_texteditor_wrapper h3");
    const allh4 = document.querySelectorAll(".from_texteditor_wrapper h4");
    const allh5 = document.querySelectorAll(".from_texteditor_wrapper h5");
    const allh1Array = Array.from(allh1);
    const allh2Array = Array.from(allh2);
    const allh3Array = Array.from(allh3);
    const allh4Array = Array.from(allh4);
    const allh5Array = Array.from(allh5);

    allh1Array?.map((item: any) => {
      item.setAttribute("class", `h3`);
    });
    setState(
      allh2Array?.map((item: any, i) => {
        item.setAttribute("id", `content${i}`);
        item.setAttribute("class", `h4 pt-[80px] mt-[-80px]`);
        return item.innerText.replace("\n", "");
      })
    );
    allh3Array?.map((item: any) => {
      item.setAttribute("class", `h5`);
    });
    allh4Array?.map((item: any) => {
      item.setAttribute("class", `h6`);
    });
    allh5Array?.map((item: any) => {
      item.setAttribute("class", `h6`);
    });
  }, []);

  return (
    <section className="pt-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr_386px] gap-6 lg:gap-[86px]">
          {/* left */}

          <div className="lg:sticky lg:top-[72px] lg:self-start overflow-auto scrollbar show_hide max-h-[calc(100vh-72px)]">
            <div className="pr-1">
              {state?.length > 0 && (
                <div className="from_texteditor_wrapper mb-6">
                  <div className="blog-table-content">
                    <div className="text-p1 font-semibold text-black mb-[10px]">
                      Table of contents
                    </div>
                    <div className="w-full h-[2px] bg-black mb-[15px]"></div>
                    <ul>
                      {state?.map((item: any, i: any) => {
                        return (
                          <li key={i}>
                            <a
                              href={`#content${i}`}
                              className="text-p4 leading-6"
                            >
                              {item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
              <AdvertisementLeftSide isSticky={false} />
            </div>
          </div>

          <div>
            {/* blog details */}
            {data.description && (
              <div className="from_texteditor_wrapper mb-8">
                <Image
                  src={data?.featuredImage}
                  height={400}
                  width={700}
                  alt="blog details"
                />
                {htmlParse(data.description)}
              </div>
            )}

            {/* faq */}
            <BlogDetailsFaq data={data?.faq} />
            {/* post tags */}
            <div className=" flex justify-between items-center py-[24px]  border-y-2">
              {data?.tags && data?.tags.length > 0 && (
                <div className=" flex gap-2 items-center">
                  <span className=" text-c3 font-semibold">Post Tags :</span>
                  {data?.tags.map((tag: any, i: number) => {
                    return (
                      <Link
                        className="px-3 py-1 bg-grey rounded group/blogtag"
                        key={i}
                        href={`/blog/tag/${tag?.slug}`}
                      >
                        <span className="group-hover/blogtag:hover:text-gradient transition-all">
                          {tag?.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
              <SocialLinks />
            </div>

            {/* comment start */}
            <div>
              <div className="mb-5 mt-[32px]">
                <div className="inline-flex items-center gap-2 bg-grey px-3 py-1.5 rounded-md">
                  <MdModeComment className="text-primary text-lg" />
                  <p className="mb-0 font-semibold text-gradient">
                    24 Comments
                  </p>
                </div>
              </div>
              <div className="relative mb-[30px]">
                <input
                  type="text"
                  className="w-full border focus:outline-none rounded-full py-[22px] pl-[80px]"
                  placeholder="Write a Comment..."
                />
                <div className="absolute top-[5px] left-[5px] w-[60px] h-[60px] rounded-full">
                  <Image
                    src="/misc/avatar-lg.png"
                    width={60}
                    height={60}
                    alt="Blog Segment"
                    className="object-cover w-full h-full rounded-full "
                  />
                </div>
                <MdSend className="absolute top-[50%] translate-y-[-50%] right-[20px] text-lg text-primary" />
              </div>
              <div className="flex flex-col gap-4">
                {commentsData?.map((item: any, i: any) => {
                  return (
                    <>
                      <div
                        className={`flex gap-4 ${
                          item?.isChild ? "ml-[60px]" : ""
                        }`}
                        key={i}
                      >
                        <div className=" w-[48px] h-[48px] rounded-full shrink-0 ">
                          <Image
                            src="/misc/avatar-lg.png"
                            width={48}
                            height={48}
                            alt="Blog Segment"
                            className="object-cover w-full h-full rounded-full "
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <p className="font-medium mb-0 text-heading">
                                Mr. Anderson
                              </p>
                              <p className="text-p4 mb-0">1 Day ago</p>
                            </div>
                            <p className="text-p4 mb-0 text-gradient">Reply</p>
                          </div>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas condimentum sed libero nunc et vitae,
                            nulla purus gravida. Purus amet arcu et malesuada
                            aenean quis dolor eget enim. Morbi nibh fringilla id
                            in. Faucibus dignissim convallis purus quam.
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            <BlogRightSideTwo id={id} />
          </div>
          {/* <BlogRightSideCategory catSlug={"/"} id={id} /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSegment;
