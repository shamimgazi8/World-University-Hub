"use client";

import { useEffect, useState } from "react";
import BlogGroupCatList from "./cat-list";
import BlogCard from "../../blog-card";

interface propTypes {
  data?: any;
  groupIndex?: number;
}

const BlogGroupSegment = ({ data, groupIndex }: propTypes) => {
  const [index, setIndex] = useState(0);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug(data.category[0].slug);
  }, []);

  return (
    <>
      <h2 className="h4">{data?.name}</h2>
      <ul className="flex items-center flex-wrap gap-4 mb-7">
        {data?.category?.map((cat: any, i: any) => {
          return (
            <BlogGroupCatList
              slug={slug}
              setSlug={setSlug}
              key={i}
              data={cat}
              setIndex={setIndex}
              dataIndex={i}
            />
          );
        })}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
        {data?.category[index].blogs?.map((post: any, index2: number) => {
          const category = data?.category[index];
          const formatedPost = {
            ...post,
            categories: [{ name: category?.name, slug: category?.slug }],
          };

          return (
            <div key={index2}>
              <BlogCard
                classes={{
                  title: "line-clamp-2 mb-3 text-[22px] leading-[30px]",
                  category:
                    "inline-block px-1 rounded transition-all mt-[15px] mb-[11px] text-white bg-tertiary hover:text-white decoration-1 hover:underline hover:underline-offset-2",
                  description: "line-clamp-2 mb-0",
                  date: "hidden",
                }}
                data={formatedPost}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogGroupSegment;
