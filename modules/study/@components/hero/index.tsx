import Image from "next/image";

interface propTypes {
  classes?: {
    root: string;
  };
}

const StudyHero = ({ classes }: propTypes) => {
  return (
    <section
      className={`custom-gradient pt-8 md:pt-10 lg:pt-[60px]  ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="container">
        <div className="max-w-[864px] mx-auto">
          <h1 className="h3 text-center  lg:mb-8">
            Country Guides - Learn More About Different Study Abroad
            Destinations
          </h1>
          <div className="mb-5 lg:mb-7">
            <Image
              src="/temp/region-landing.jpg"
              alt="region-landing"
              width={864}
              height={486}
              className="rounded-lg"
            />
          </div>
          <p className="text-p2 text-center mb-0">
            In this country guide section, you can find important information
            about your potential study abroad destinations. Learn about the
            requirements, application period, language, culture and student life
            of different countries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyHero;
