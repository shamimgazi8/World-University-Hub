import UniversityCourses from "@/modules/universities/courses";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(params: any) {
  try {
    const res = await fetch(
      `${apiUrl}/public/university/${params.university_slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Faild to Fetch Data");
    }
    return res.json();
  } catch (error) {
    return notFound();
  }
}

const UniversityCoursePage = async ({ params }: any) => {
  const data = await getData(params);
  return <UniversityCourses data={data} />;
};

export default UniversityCoursePage;
