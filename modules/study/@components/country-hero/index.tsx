import Image from "next/image";
import Link from "next/link";

interface propTypes {
  classes?: {
    root: string;
  };
}

const CountryHero = ({ classes }: propTypes) => {
  return (
    <section
      className={`custom-gradient-2 pt-8 md:pt-10 lg:pt-[60px] lg:pb-[60px]  ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="container">
        <div className="max-w-[864px] mx-auto">
          <h1 className="h3 text-center">
            <span className="block">Study in Asia:</span>
            <span>Everything You Need to Know</span>
          </h1>

          <p className="text-center text-p2">
            Do you want to study in Asia? Asia is a continent with many strong
            cultural identities. Students that choose to study in a country
            within Asia can read our series of Asian study guides to gain an
            insight into the exciting possibilities on offer.
          </p>
          <p className="text-center text-p2">
            For plenty of useful information and facts about studying in Asia,
            select the country study guide from the list below.
          </p>
          <div className="flex justify-center pb-7">
            <Link
              href={`/search/asia`}
              className="btn btn-primary text-center rounded"
            >
              Find A Program
            </Link>
          </div>
          <div>
            <Image
              src="/temp/country-hero.png"
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

export default CountryHero;
