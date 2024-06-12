import { useGetCountriesQuery } from "@/appstore/global/global-api";

import { Popover } from "antd";
import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

interface PropTypes {
  queryParams?: any;
  setQueryParams?: any;
}

const Searchloction = ({ queryParams, setQueryParams }: PropTypes) => {
  const [countryName, setCountryName] = useState("");
  const { data, isLoading, isError } = useGetCountriesQuery("?");
  const dataArr = data && data?.data;

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <>
      <Popover
        open={open}
        onOpenChange={handleOpenChange}
        placement="bottomRight"
        arrow={false}
        trigger="click"
        rootClassName=" mx-auto  "
        content={
          <div className=" ">
            {dataArr?.length > 0 ? (
              <ul
                className={`grid ${
                  dataArr?.length > 4 ? "lg:grid-cols-4" : "lg:grid-cols-1"
                }   grid-cols-2 gap-x-4`}
              >
                {dataArr?.map((item: any, i: number) => {
                  return (
                    <li
                      onClick={() => {
                        setQueryParams((prev: any) => ({
                          ...prev,
                          countrySlug: item?.slug,
                        }));
                        setCountryName(item?.name);
                        hide();
                      }}
                      key={i}
                      className="overflow-hidden group w-full "
                    >
                      <div className="cursor-pointer grid grid-cols-[auto_1fr] p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] group-hover:translate-x-0 transition">
                        <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                        <span className="group-hover:text-gradient w-max">
                          {item?.name}
                        </span>
                      </div>
                      <span className="block w-full h-[1px] bg-[#eee]"></span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div>Data Not Found!</div>
            )}
          </div>
        }
      >
        <button
          type="button"
          className="flex  items-center justify-between gap-3 btn bg-[#F2F3F4] w-full py-3  rounded-full"
        >
          {queryParams?.countrySlug ? (
            <>
              <div className="line-clamp-1 block text-ellipsis">
                {countryName}
              </div>
              <FiX
                className="text-base hover:text-red-500 transition-all shrink-0"
                onClick={(e: any) => {
                  setQueryParams((prev: any) => ({
                    ...prev,
                    countrySlug: "",
                  }));
                  e.stopPropagation();
                }}
              />
            </>
          ) : (
            <>
              <span className="line-clamp-1">Where do you want to study?</span>
            </>
          )}
        </button>
      </Popover>
    </>
  );
};

export default Searchloction;
