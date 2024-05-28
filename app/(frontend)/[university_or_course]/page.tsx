import UniversitiesCountryWise from "@/modules/universities/country-wise";
import Link from "next/link";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

/**
 * usa-top-universities
 * usa-universities
 * usa-top-courses
 */

const TopCourseOrUniversityPage = async ({ params }: any) => {
  const splitParam = params.university_or_course.split("-");

  if (
    !splitParam.includes("top") &&
    splitParam[splitParam.length - 1] === "universities"
  ) {
    const slugRaw = params.university_or_course.split("universities")[0];
    const countrySlug = slugRaw.slice(0, -1);

    return <UniversitiesCountryWise countrySlug={countrySlug} />;
  } else {
    return (
      <section>
        <div className="">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
              <Link
                href={"/"}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default TopCourseOrUniversityPage;
