import UniversityCourseDetails from "@/modules/universities/course-details";
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
async function getCourseData(params: any) {
  try {
    const res = await fetch(
      `${apiUrl}/public/course/${params.university_slug}?titleSlug=${params.course_slug}`,
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

const CourseDetailsPage = async ({ params }: any) => {
  const data = await getData(params);
  const dataCourse = await getCourseData(params);
  return <UniversityCourseDetails dataCourse={dataCourse} data={data} />;
};

export default CourseDetailsPage;
