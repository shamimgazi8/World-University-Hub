import Link from "next/link";
import React from "react";

const FirstStop = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-5">
          <h4 className="mb-0">
            Your first stop on your journey to study abroad
          </h4>
          <p className="mb-0">
            At World Uni Hub, we believe that students who study abroad become
            the next generation of globally-minded adventurers and leaders - and
            we want more of you to do it! Every year, our search engine helps
            over 8 million students connect with some of the best universities
            and schools{" "}
          </p>
          <div>
            <Link href="#" className="text-p1 text-gradient font-medium ">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstStop;
