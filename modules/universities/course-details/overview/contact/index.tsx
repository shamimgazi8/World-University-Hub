import React, { useState } from "react";
import { Modal } from "antd";
import MessageForm from "@/modules/study/@components/form";

interface propTypes {
  data?: any;
}

const ContactInstitute = ({ data }: propTypes) => {
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
      <button onClick={showModal} className="btn btn-primary rounded">
        Contact Institute
      </button>
      <Modal
        title={<h5 className="border-b mb-0 pb-4">Message the school</h5>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        style={{ maxWidth: "800px" }}
        className="!w-full"
      >
        <div className="pt-3">
          <MessageForm className={""} isTitle={false} />
        </div>
      </Modal>
    </>
  );
};

export default ContactInstitute;
