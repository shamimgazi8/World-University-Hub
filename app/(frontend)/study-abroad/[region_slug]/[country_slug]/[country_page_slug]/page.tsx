import CountryPages from "@/modules/study/country-pages";

const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(params: any) {
  try {
    const res = await fetch(
      `${apiUrl}/public/page/single?slug=${params.country_page_slug}&country=${params.country_slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const CountryPagesPage = async ({ params }: any) => {
  const regionSlug = params.region_slug;
  const countrySlug = params.country_slug;
  const pageSlug = params.country_page_slug;
  const data = await getData(params);
  return (
    <CountryPages
      data={data}
      regionSlug={regionSlug}
      countrySlug={countrySlug}
      pageSlug={pageSlug}
    />
  );
};

export default CountryPagesPage;
