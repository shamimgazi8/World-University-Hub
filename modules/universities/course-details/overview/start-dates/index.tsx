import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import moment from "moment";

interface propTypes {
  data?: any;
}

const StartDates = ({ data }: propTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {data?.semesters?.length > 0 && (
        <div>
          <div className={`flex text-sm items-center gap-2 mb-2`}>
            <Image
              src="/icons/calender-grey.png"
              alt="Program dates"
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Start Dates</span>
          </div>

          <div className="grid grid-cols-2">
            {data?.semesters?.slice(0, 2).map((item: any, i: number) => {
              const campusName = item?.campus && item?.campus?.split(",")[0];
              const startDate =
                item?.semData?.length > 0
                  ? moment(item?.semData[0]?.startDate).format("D MMM")
                  : "N/A";
              const endData =
                item?.semData?.length > 0
                  ? moment(item?.semData[0]?.endDate).format("D MMM")
                  : "N/A";
              return (
                <div className={`${i !== 0 ? "pl-4 border-l" : ""}`} key={i}>
                  <div>
                    <span className="text-gradient font-medium">
                      {campusName ?? item?.campusLocation}
                    </span>
                  </div>
                  <span className="text-sm">
                    {startDate}- {endData}{" "}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={showModal}
              className="text-center font-normal mt-4 hover:text-gradient"
            >
              Show All (5)
            </button>
          </div>
        </div>
      )}

      <Modal
        title={<h5 className="border-b mb-0 pb-4">{data?.displayName}</h5>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        style={{ maxWidth: "900px" }}
        className="!w-full"
        bodyStyle={{ overflow: "auto" }}
      >
        <div className="pt-3">
          <div className="mb-3">All available course dates</div>

          <div className="flex flex-col gap-6">
            {data?.semesters?.map((item: any, i: number) => {
              return (
                <div key={i}>
                  <h6 className="mb-2">
                    {item?.campus?.split(",")[0] ?? item?.campusLocation}
                  </h6>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <div> Start Date</div>
                        </th>
                        <th>
                          <div>End Date</div>
                        </th>
                        <th>
                          <div>Course Fee</div>
                        </th>
                        <th>
                          <div>Campus Location</div>
                        </th>
                        <th>
                          <div>Language of Instruction</div>
                        </th>
                        <th>
                          <div>Delivery Method</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item?.semData?.length &&
                        item?.semData?.map((sem: any) => {
                          return (
                            <tr>
                              <td>
                                <div>
                                  {moment(sem?.startDate).format("MMMM YYYY")}
                                </div>
                              </td>
                              <td>
                                <div>
                                  {moment(sem?.endDate).format("MMMM YYYY")}
                                </div>
                              </td>
                              <td>
                                <div>
                                  {sem?.courseFee > 0 ? sem?.courseFee : "Free"}
                                </div>
                              </td>
                              <td>
                                <div>
                                  {sem?.campusLocation !== ""
                                    ? sem?.campusLocation
                                    : "N/A"}
                                </div>
                              </td>
                              <td>
                                <div>{sem?.languageOfInstruction}</div>
                              </td>
                              <td>
                                <div>{sem?.deliveryMethod?.name ?? "N/A"}</div>
                              </td>
                            </tr>
                          );
                        })}
                      {item?.semData?.length == 0 && (
                        <div className="flex justify-center">
                          <span>No data found</span>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StartDates;
