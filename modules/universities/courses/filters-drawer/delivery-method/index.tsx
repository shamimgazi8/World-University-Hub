import { useGetDeliveryMethodQuery } from "@/appstore/university/university-api";
import { Popover, Radio, Space } from "antd";
import { useState } from "react";
import { FiChevronDown, FiPlay } from "react-icons/fi";

const FilterDeliveryMethod = ({
  setQueryParams,
  currentDMethod,
  setCurrentDMethod,
  deCurrentSlug,
  setDeCurrentSlug,
}: any) => {
  const [clicked, setClicked] = useState(false);
  const { data } = useGetDeliveryMethodQuery({});
  const handleClickChange = (open: boolean) => {
    setClicked(open);
  };

  const onChange = (item: any) => {
    setCurrentDMethod(item?.name);
    setDeCurrentSlug(item?.slug);
    setQueryParams((prev: any) => ({
      ...prev,
      deliveryMethod: item?.slug,
    }));
    setClicked(false);
  };

  return (
    <div>
      <div className="mb-1 block font-medium">Search by Delivery Method</div>
      <Popover
        open={clicked}
        onOpenChange={handleClickChange}
        content={
          <>
            <div className="min-w-[240px]">
              <ul>
                {data?.data?.map((item: any, i: number) => {
                  return (
                    <li
                      key={i}
                      className="overflow-hidden group w-full"
                      onClick={() => onChange(item)}
                    >
                      <div
                        className={`cursor-pointer grid grid-cols-[auto_1fr] p-2 hover:text-inherit text-black font-normal items-center gap-2  group-hover:translate-x-0 transition ${
                          item?.slug === deCurrentSlug
                            ? "translate-x-0 transition"
                            : "translate-x-[-30px]"
                        }`}
                      >
                        <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                        <span
                          className={`group-hover:text-gradient w-max  ${
                            item?.slug === deCurrentSlug
                              ? "text-gradient w-max"
                              : ""
                          }`}
                        >
                          {item?.name}
                        </span>
                      </div>
                      {data?.data?.length - 1 !== i && (
                        <span className="block w-full h-[1px] bg-[#eee]"></span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        }
        trigger="click"
        placement="bottomLeft"
      >
        <button
          type="button"
          className="btn border rounded w-full flex items-center py-2 px-3"
        >
          <span className="line-clamp-1 text-left">{currentDMethod}</span>
          <FiChevronDown className="text-lg ml-auto shrink-0" />
        </button>
      </Popover>
    </div>
  );
};

export default FilterDeliveryMethod;
