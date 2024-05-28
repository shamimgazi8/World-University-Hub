import { useGetCountriesDataQuery } from "@/appstore/country/country-api";
import { Popover } from "antd";
import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

interface PropTypes {
  queryParams?: any;
  setQueryParams?: any;
}

const SearchLocationJob = ({ queryParams, setQueryParams }: PropTypes) => {
  const [countryName, setCountryName] = useState("");
  const { data, isLoading, isError } = useGetCountriesDataQuery(
    "?limit=100&hasUniversity=true"
  );
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
        rootClassName="max-w-[1000px] mx-auto w-full "
        content={
          <div className=" ">
            <ul className="grid grid-cols-4 gap-x-4 ">
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
          </div>
        }
      >
        <button
          type="button"
          className="flex  items-center justify-between gap-3 btn bg-[#FFF] w-full py-3  rounded-full"
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
              <span className="line-clamp-1">Location</span>
              <FiChevronDown className="text-lg shrink-0" />
            </>
          )}
        </button>
      </Popover>
    </>
  );
};

export default SearchLocationJob;
