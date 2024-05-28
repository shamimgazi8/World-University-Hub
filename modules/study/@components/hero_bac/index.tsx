import Image from "next/image";

interface propTypes {
  classes?: {
    root: string;
  };
}

const StudyHero = ({ classes }: propTypes) => {
  return (
    <section
      className={`bg-gradient-to-b from-primary-light to-secondary-light pt-8 md:pt-10 lg:pt-[60px] mb-8 md:mb-10 lg:mb-[80px] ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          <div>
            <h1 className="text-h3">
              Country Guides - Learn More About Different Study Abroad
              Destinations
            </h1>
            <p className="text-p2">
              In this country guide section, you can find important information
              about your potential study abroad destinations. Learn about the
              requirements, application period, language, culture and student
              life of different countries.
            </p>
          </div>
          <div>
            <Image
              src="/temp/region-landing.jpg"
              alt="region-landing"
              width={1000}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyHero;
