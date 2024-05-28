import CollegePreferencePage from "@/modules/@admin/profile/college-preference";
import ProfileSidebar from "@/modules/@admin/profile/sidebar";

const CollegePreference = () => {
  return (
    <div className="container">
      <div className="max-w-screen-lg mx-auto mt-5">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block basis-1/4">
            <ProfileSidebar />
          </div>
          <div className="basis-3/4 ml-0 md:ml-5">
            <CollegePreferencePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePreference;
