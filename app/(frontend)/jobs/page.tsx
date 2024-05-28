import JobsLanding from "@/modules/jobs/landing";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData() {
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

const JobsPage = async () => {
  const data = await getData();
  return <JobsLanding serverData={data} />;
};

export default JobsPage;
