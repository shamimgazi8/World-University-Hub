import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  data?: any;
  classes?: {
    root?: string;
    imageWrapper?: string;
    imageStyle?: string;
    cardBody?: string;
  };
}
const BlogCategoryCard = ({ data, classes }: propTypes) => {
  return (
    <div className={`${classes?.root ? classes?.root : ""}`}>
      <Link
        href={`/blog/category/${data?.slug}`}
        className={`group/catcarousel block w-full  ${
          classes?.imageWrapper ? classes.imageWrapper : ""
        }  `}
      >
        <Image
          src={data?.featuredImage || "/misc/placeholder-blog-category.webp"}
          width={960}
          height={540}
          alt={data?.name}
          className={`object-cover w-full ${
            classes?.imageStyle ? classes.imageStyle : ""
          }`}
        />
        <div className={`${classes?.cardBody ? classes.cardBody : ""}`}>
          <span className="text-center block text-p1 mt-[15px] font-semibold text-black group-hover/catcarousel:text-gradient transition-all">
            {data?.name}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BlogCategoryCard;
