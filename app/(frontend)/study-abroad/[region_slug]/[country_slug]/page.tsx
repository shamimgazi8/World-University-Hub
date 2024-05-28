import StudyCountryDetails from "@/modules/study/country-details";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(params: any) {
  try {
    const res = await fetch(`${apiUrl}/public/country/${params.country_slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to Fetch Data");
    }
    return res.json();
  } catch (error) {
    return notFound();
  }
}
const CountryPage = async ({ params }: any) => {
  const regionSlug = params.region_slug;
  const countrySlug = params.country_slug;
  const data = await getData(params);

  return (
    <StudyCountryDetails
      data={data}
      regionSlug={regionSlug}
      countrySlug={countrySlug}
    />
  );
};

export default CountryPage;
