import { Modal } from "antd";
import React from "react";
import "./model.css";

function Models({
  isModalOpen,
  handleOk,
  handleCancel,
  modelContent,
  modelname,
}) {
  return (
    <div>
      <Modal
        title={modelname}
        className="model"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // This will remove the default footer with buttons

      >
        hiii
        {modelContent}
      </Modal>
    </div>
  );
}

export default Models;
