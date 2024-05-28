import StudyCountries from "@/modules/study/countries";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(params: any) {
  try {
    const res = await fetch(`${apiUrl}/public/region/${params.region_slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const RegionPage = async ({ params }: any) => {
  const data = await getData(params);

  return <StudyCountries data={data} />;
};

export default RegionPage;
