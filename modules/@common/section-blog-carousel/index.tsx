import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    title: "A Culinary Journey: Exploring the Gastronomic Delights of Thailand",
    description:
      "Embark on a mouthwatering adventure as we take you through the tantalizing world of Thai cuisine. In this blog post, we'll explore the rich and diverse flavors that make Thai food a global sensation. From spicy street food to aromatic curries, join us as we uncover the secrets behind traditional recipes and delve into the unique culinary culture of Thailand.",
    imageSrc: "/temp/blog-card.png",
  },
  {
    title: "Finding Solace in Nature: A Hiker's Guide to the Swiss Alps",
    description:
      "Escape the hustle and bustle of city life and venture into the breathtaking landscapes of the Swiss Alps. In this blog post, we'll share our awe-inspiring experiences hiking through majestic mountains, serene valleys, and turquoise lakes. Discover hidden trails, witness panoramic vistas, and learn how nature can heal the soul. Whether you're an experienced hiker or a novice explorer, get ready to be enchanted by the beauty of the Swiss Alps.",
    imageSrc: "/temp/blog-card-2.png",
  },
  {
    title: "Unraveling History: Exploring the Ancient Wonders of Egypt",
    description:
      "Step back in time as we unravel the mysteries of ancient Egypt. In this blog post, we'll take you on a mesmerizing journey through the iconic wonders of this ancient civilization. From the majestic pyramids of Giza to the enigmatic Sphinx, immerse yourself in the rich history and fascinating mythology that has captivated the world for centuries. Join us as we delve into the archaeological treasures and cultural heritage of Egypt.",
    imageSrc: "/temp/blog-card-3.png",
  },
];

const SectionBlogCarousel = () => {
  return (
    <section className="pt-6 lg:pt-[80px]">
      <div className="container">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-center mb-10">Blogs</h2>
          <div className="grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
            {blogPosts?.map((item, i) => {
              return (
                <Link
                  href="#"
                  key={i}
                  className="shadow-one hover:text-inherit"
                >
                  <div className="w-full h-[185px]">
                    <Image
                      src={item?.imageSrc}
                      width={800}
                      height={300}
                      alt="Picture of the author"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col p-6 lg:p-[30px]">
                    <h3 className="text-p1 line-clamp-2 hover:text-gradient">
                      {item?.title}
                    </h3>

                    <p className="line-clamp-3 ">{item?.description}</p>

                    <div className="mt-auto">
                      <span className="hover:text-gradient">Read More</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBlogCarousel;
