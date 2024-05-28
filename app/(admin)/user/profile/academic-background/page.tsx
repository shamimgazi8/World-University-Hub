import AcademicBackground from "@/modules/@admin/profile/academic-background";
import ProfileSidebar from "@/modules/@admin/profile/sidebar";
import React from "react";

const AcademicPage = () => {
  return (
    <div className="container">
      <div className="max-w-screen-lg mx-auto mt-5">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block basis-1/4">
            <ProfileSidebar />
          </div>
          <div className="basis-3/4 ml-0 md:ml-5">
            <AcademicBackground />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPage;
