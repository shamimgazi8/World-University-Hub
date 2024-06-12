import Image from "next/image";
import React from "react";

const HeroGallery = () => {
  return (
    <div className="lg:block hidden  w-full relative ">
      <div className=" test-3 w-full h-[100%] absolute bottom-0 -z-50 translate-y-[50%] lg:block hidden  "></div>
      <div className="grid  grid-cols-[minmax(50px,_284px)_minmax(50px,_284px)_minmax(50px,_555px)_minmax(50px,_284px)_minmax(50px,_284px)] lg:gap-6 md:gap-4 gap-2 lg:mt-[70px] mx-auto justify-center items-center    z-100 p-2">
        <div className=" h-[422px] mt-[86px] relative">
          <Image
            src="/misc/hero-one.png"
            fill
            alt="hero-one"
            className=" object-cover rounded-lg"
          />
        </div>
        <div className="">
          <div className=" h-[275px] mt-3 relative">
            <Image
              src="/misc/hero-two.png"
              fill
              alt="hero-one"
              className=" object-cover rounded-lg"
            />
          </div>
          <div className=" h-[225px] lg:mt-6 mt-2 relative">
            <Image
              src="/misc/hero-three.png"
              fill
              alt="hero-one"
              className=" object-cover rounded-lg"
            />
          </div>
        </div>

        <div className=" h-[533px] mt-5 relative">
          <Image
            src="/misc/hero-four.png"
            fill
            alt="hero-one"
            className=" object-cover rounded-lg"
          />
        </div>

        <div className=" mt-10">
          <div className=" h-[183px] relative">
            <Image
              src="/misc/hero-five.png"
              fill
              alt="hero-one"
              className=" object-cover rounded-lg"
            />
          </div>

          <div className=" h-[274px] lg:mt-6 mt-2 relative">
            <Image
              src="/misc/hero-six.png"
              fill
              alt="hero-one"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="  h-[422px] mt-[80px] relative">
          <Image
            src="/misc/hero-seven.png"
            fill
            alt="hero-one"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroGallery;
