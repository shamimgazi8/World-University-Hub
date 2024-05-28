import UniversityCard from "@/modules/universities/@components/university-card";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Link from "next/link";
import React, { FC } from "react";
import dataArray from "@/data/temp-university-admin.json";
import PaginationComponent from "@/modules/@common/pagination";
import { useAllShortListQuery } from "@/appstore/user/shortList/shorList-api";
import { generateQueryString } from "@/helpers/utils";

interface AdminUniversitiesProps {
  dashboard: boolean;
}

const AdminUniversities: FC<AdminUniversitiesProps> = ({ dashboard }) => {
  const queryParams: any = {
    reference: "UNIVERSITY",
  };
  const queryString = generateQueryString(queryParams);
  const {
    data: shortList,
    isError,
    isLoading,
  } = useAllShortListQuery(queryString);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h4>
            <span className="text-gradient">Universities</span>
          </h4>
        </div>
        {dashboard &&
          shortList &&
          shortList?.data &&
          shortList?.data?.length > 4 && (
            <div>
              <Link
                href="/user/universities"
                className="btn btn-primary-outline rounded"
              >
                View All
              </Link>
            </div>
          )}
      </div>

      <Tabs defaultActiveKey="1">
        <TabPane tab={`Shortlisted (${shortList?.data?.length})`} key="1">
          <div className="flex flex-col gap-7 lg:gap-[50px] py-5">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dashboard
                  ? shortList?.data?.slice(0, 4).map((uni: any, i: number) => {
                      return <UniversityCard data={uni?.university} key={i} />;
                    })
                  : shortList?.data?.map((uni: any, i: number) => {
                      return <UniversityCard data={uni?.university} key={i} />;
                    })}
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Recommended (8)" key="2">
          <div className="flex flex-col gap-7 lg:gap-[50px] py-5">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dashboard
                  ? dataArray?.slice(0, 4).map((uni: any, i: number) => {
                      const formatedData = {
                        ...uni,
                        country: {
                          name: "Australia",
                          slug: "australia",
                        },
                      };
                      return <UniversityCard data={formatedData} key={i} />;
                    })
                  : dataArray?.map((uni: any, i: number) => {
                      const formatedData = {
                        ...uni,
                        country: {
                          name: "Australia",
                          slug: "australia",
                        },
                      };
                      return <UniversityCard data={formatedData} key={i} />;
                    })}
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminUniversities;
