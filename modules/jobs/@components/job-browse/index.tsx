"use client";

import { useState } from "react";
import JobCategory from "./category";
import JobType from "./job-type";
import JobLoaction from "./location";

const JobsBrowse = () => {
  const [browseJob, setBrowseJob] = useState("Job Type");

  return (
    <section>
      <div className="container">
        <div className="max-w-[1050px] max-h-[434px] mx-auto bg-white px-[40px] py-[30px] mt-[-200px] shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] rounded-md">
          <div>
            <div className="flex items-center   gap-[32px]">
              <div
                className={`  py-2 px-0 cursor-pointer btn  ${
                  browseJob === "Job Type"
                    ? "border-b-primary border-b-[1px] text-gradient"
                    : ""
                }`}
                onClick={() => {
                  setBrowseJob("Job Type");
                }}
              >
                Job Type
              </div>

              <div
                className={`  py-2 px-0 cursor-pointer btn  ${
                  browseJob === "Academic Discipline"
                    ? " border-b-primary border-b-[1px] text-gradient"
                    : ""
                }`}
                onClick={() => {
                  setBrowseJob("Academic Discipline");
                }}
              >
                <span className="mb-0 text-center">Academic Discipline</span>
              </div>
              <div
                className={` py-2 px-0 cursor-pointer btn  ${
                  browseJob === "Location"
                    ? " border-b-primary border-b-[1px] text-gradient"
                    : ""
                }`}
                onClick={() => {
                  setBrowseJob("Location");
                }}
              >
                <p className="mb-0 text-center">Location</p>
              </div>
            </div>

            {browseJob == "Job Type" && <JobType />}
            {browseJob == "Academic Discipline" && <JobCategory />}
            {browseJob == "Location" && <JobLoaction />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsBrowse;
