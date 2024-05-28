"use client";
import AdminCourses from "@/modules/@admin/courses";
import AdminUniversities from "@/modules/@admin/universities";
const UniversitiesPage = () => {
  return (
    <div className="container">
      <div className="max-w-screen-xl mx-auto mt-5">
        <AdminUniversities dashboard={false} />
      </div>
    </div>
  );
};

export default UniversitiesPage;
