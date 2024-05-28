import {
  useAllCompareQuery,
  useCreateCompareMutation,
} from "@/appstore/user/compare/compare-api";
import { generateQueryString } from "@/helpers/utils";
import { Spin, message } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineSwapCalls } from "react-icons/md";
import Cookies from "js-cookie";
interface compare {
  courseTitleSlug?: string;
  universitySlug?: string;
  reference?: string;
}

const CompareButton = ({
  reference = "UNIVERSITY",
  universitySlug,
  courseTitleSlug,
}: compare) => {
  const [createCompare, { isLoading }] = useCreateCompareMutation();
  const queryParams: any = {
    reference,
  };
  const queryString = generateQueryString(queryParams);
  const { data: compare } = useAllCompareQuery(queryString);
  const [exist, setExist] = useState<any>();
  useEffect(() => {
    const exists =
      compare?.data?.some((item: any) =>
        reference === "UNIVERSITY"
          ? item?.university?.slug === universitySlug
          : item?.course?.courseTitle?.slug === courseTitleSlug
      ) || false;
    setExist(exists);
  }, [compare]);

  const compareHandler = async () => {
    try {
      if (!exist && compare?.data.length > 2) {
        message.error(`Maximum 3 ${reference.toLowerCase()} allowed.`);
        return;
      }
      const response: any = await createCompare({
        reference,
        universitySlug,
        courseTitleSlug,
      });

      if (response.error) {
        if (response.error.status === 400) {
          message.error(response.error.data.message);
        } else {
          if (response.error.data.message === "Token not found") {
            message.error("You must login before perform this action.");
          } else {
            message.error(
              response.error.data.message
                ? response.error.data.message
                : "Something went wront. Please try again!"
            );
          }
        }
      } else {
        message.success(response?.data?.message);
      }
    } catch (error) {}
  };

  return (
    <span
      onClick={() => {
        compareHandler();
      }}
    >
      {isLoading ? (
        <Spin
          indicator={
            <AiOutlineLoading3Quarters
              style={{ color: "0000ff" }}
              size={25}
              className="spinner"
            />
          }
        />
      ) : (
        <MdOutlineSwapCalls
          className={`${exist ? "text-[#0000ff]" : undefined}`}
          size={25}
        />
      )}
    </span>
  );
};

export default CompareButton;
