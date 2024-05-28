import Continents from "../@components/continents";
import OtherContinents from "../@components/other-continents";
import StudyCountryList from "./country-list";
import ContinentSingleHero from "./hero";

interface propTypes {
  data: any;
}
const StudyCountries = ({ data }: propTypes) => {
  return (
    <>
      {data ? (
        <>
          <ContinentSingleHero data={data} />
          <StudyCountryList regionSlug={data?.slug} />
          <OtherContinents
            classes={{ root: "bg-grey pt-8 lg:pt-[70px]" }}
            title="Check other continent"
            withCountries={false}
            regionSlug={data?.slug}
          />
        </>
      ) : (
        <section>
          <div className="container">
            <div className="text-center my-10">No Data Found</div>
          </div>
        </section>
      )}
    </>
  );
};

export default StudyCountries;
