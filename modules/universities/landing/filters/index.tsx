"use client";

import { useState } from "react";
import { Drawer } from "antd";
import React from "react";
import { FiSliders } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";
import UniSearchByRegion from "../@components/search-by-region";
import UniSearchByLocation from "../@components/search-by-location";

interface propTypes {
  setQueryParams?: any;
}

const UniversityLandingFilters = ({ setQueryParams }: propTypes) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <div className="border-b mb-5">
        <div className="flex flex-wrap justify-between py-3">
          <div className="flex gap-2 md:gap-4">
            <button
              onClick={() => setDrawer(true)}
              className="btn btn-outline rounded text-sm"
            >
              <FiSliders size={15} />
              Filters
            </button>
            <button className="btn btn-outline rounded text-sm">
              <TbRefresh size={15} /> Reset
            </button>
          </div>
        </div>
      </div>

      <Drawer
        title="Filters"
        placement={"right"}
        onClose={() => setDrawer(false)}
        open={drawer}
        contentWrapperStyle={{ width: "100%", maxWidth: "450px" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-5">
            <UniSearchByRegion setQueryParams={setQueryParams} />
            <UniSearchByLocation setQueryParams={setQueryParams} />
          </div>

          <div className="mt-auto">
            <div className="flex justify-between">
              <button
                className="btn btn-cancel rounded text-sm"
                onClick={() => setDrawer(false)}
              >
                Cancel
              </button>
              <div className="flex items-center gap-2">
                <button className="btn btn-outline rounded">Reset</button>
                <button
                  onClick={() => setDrawer(false)}
                  className="btn btn-primary rounded text-sm"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default UniversityLandingFilters;
