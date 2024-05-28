import JobDetails from "@/modules/jobs/details";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(params: any) {
  try {
    const res = await fetch(`${apiUrl}/public/jobs/${params.job_slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
async function getData1() {
  try {
    const res = await fetch(`${apiUrl}/public/jobs?page=1&limit=5`, {
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

const JobsCategory = async ({ params }: any) => {
  const data = await getData(params);
  const serverData = await getData1();

  return <JobDetails data={data} serverData={serverData} />;
};

export default JobsCategory;
