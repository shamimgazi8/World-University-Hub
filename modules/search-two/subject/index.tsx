import dataLevel from "@/data/temp-data-level.json";
import { Popover } from "antd";
import { FiChevronDown } from "react-icons/fi";

interface PropTypes {
  queryParams?: any;
  setQueryParams?: any;
}

const SearchSubject = ({ queryParams, setQueryParams }: PropTypes) => {
  return (
    <>
      <Popover
        placement="bottom"
        rootClassName="max-w-[1000px] w-full"
        arrow={false}
        content={
          <div className=" ">
            <ul className="grid grid-cols-4 gap-x-4">
              {dataLevel?.map((item, i) => {
                return (
                  <li key={i} className="overflow-hidden group w-full">
                    <div className="cursor-pointer grid grid-cols-[auto_1fr] p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] group-hover:translate-x-0 transition">
                      <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                      <span className="group-hover:text-gradient w-max">
                        {item?.title}
                      </span>
                    </div>
                    {dataLevel?.length - 1 !== i && (
                      <span className="block w-full h-[1px] bg-[#eee]"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        }
        trigger="click"
      >
        <button className="flex rounded items-center justify-between btn bg-[#fff] w-full py-3 px-5 ">
          <span>Subject</span>
          <FiChevronDown className="text-lg" />
        </button>
      </Popover>
    </>
  );
};

export default SearchSubject;
