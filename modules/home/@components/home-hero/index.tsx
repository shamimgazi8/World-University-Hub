import Search from "@/modules/search";
import Image from "next/image";
import InsightInfo from "./insight-info";

const HomeHero = () => {
  return (
    <section className="relative z-0 py-[80px] min-h-[80vh] grid place-items-center">
      <div className=" absolute left-0 top-0 w-full h-full  overlay z-[0]"></div>
      <Image
        className="absolute left-0 top-0 z-[-1] w-full h-full object-cover"
        src="/images/home/find-universities.webp"
        alt="Find Universities Abroad"
        width={2000}
        height={800}
        priority
      />
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center gap-5 lg:gap-[30px] md:max-w-[660px] lg:max-w-[900px] w-full mx-auto  z-10 mt-[-16px] px-4 h-full">
          <h1 className="text-center text-white mb-0">
            Find Universities Abroad that are Right for You
          </h1>
          <div className="flex flex-col justify-center gap-[25px] w-full">
            <div className="text-white text-center text-p1 font-semibold">
              DISCOVER. RESEARCH. DECIDE
            </div>
            <Search />
          </div>
          <InsightInfo />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
