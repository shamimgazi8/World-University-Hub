"use client";
import AdminCourses from "@/modules/@admin/courses";
const CoursePage = () => {
  return (
    <div className="container">
      <div className="max-w-screen-xl mx-auto mt-5">
        <AdminCourses dashboard={false} />
      </div>
    </div>
  );
};

export default CoursePage;
