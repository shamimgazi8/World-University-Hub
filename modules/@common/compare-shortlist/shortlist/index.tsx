import {
  useAllShortListQuery,
  useCreateShortListMutation,
} from "@/appstore/user/shortList/shorList-api";
import { generateQueryString } from "@/helpers/utils";
import { Spin, message } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
interface shortList {
  courseTitleSlug?: string;
  universitySlug?: string;
  reference?: string;
}

const ShortListButton = ({
  reference = "UNIVERSITY",
  universitySlug,
  courseTitleSlug,
}: shortList) => {
  const [createShortList, { isLoading }] = useCreateShortListMutation();
  const queryParams: any = {
    reference,
  };
  const queryString = generateQueryString(queryParams);
  const { data: shortList } = useAllShortListQuery(queryString);
  const [exist, setExist] = useState<any>();

  useEffect(() => {
    const exists =
      Array.isArray(shortList?.data) &&
      shortList.data.some((item: any) => {
        const referenceValue = item[reference.toLowerCase()];
        if (reference === "UNIVERSITY") {
          return referenceValue.slug === universitySlug;
        }

        if (
          referenceValue &&
          referenceValue.university &&
          referenceValue?.university?.slug
        ) {
          if (reference === "COURSE") {
            return (
              referenceValue.courseTitle?.slug === courseTitleSlug &&
              referenceValue.university?.slug === universitySlug
            );
          }
        }

        return false;
      });

    setExist(exists);
  }, [shortList]);

  const shortListHandler = async () => {
    try {
      const response: any = await createShortList({
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
        shortListHandler();
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
        <FiHeart
          className={`${exist ? "text-red-500 fill-red-500" : undefined}`}
          size={25}
        />
      )}
    </span>
  );
};

export default ShortListButton;
