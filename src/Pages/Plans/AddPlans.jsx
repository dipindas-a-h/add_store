import React, { useState } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import AddButton from "../../components/Buttons/AddNewButton/AddButton";
import { Button, Form, Input, Table } from "antd";
import Models from "../../components/Models/Models";

function AddPlans() {
  const [model, setModel] = useState(false);

  const columns = [
    {
      title: "SI No.",
      dataIndex: "sino",
      align: "center",
      width: 80,
    },
    {
      title: "Plan No.",
      dataIndex: "plan_no",
      align: "center",
      width: 120,
    },
    {
      title: "Plan Name",
      dataIndex: "plan_name",
      align: "center",
      width: 200,
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
      width: 100,
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      width: 80,
    },
  ];

  const data = [
    {
      key: "1",
      sino: 1,
      plan_no: "p-01",
      plan_name: "golden",
      date: "10-12-2002",
      price: "30,000",
    },
  ];

  return (
    <div>
      <SubHeading heading={"Plans"} />
      <div className="col-12 d-flex justify-content-end mt-3">
        {/* <AddButton label={"ADD PLAN"} onClick={()=>{
          setModel(true)
        }}/> */}
        <Button
          className="btn "
          style={{ color: "white" }}
          onClick={() => {
            setModel(true);
          }}
        >
          Add Plan
        </Button>
      </div>
      <div className="col-12 mt-3">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false} // Disable pagination for a single-page table
          scroll={{ x: "max-content" }} // Enable horizontal scrolling for overflowing content
          bordered
        />
      </div>
      <Models
        isModalOpen={model}
        modelContent={
          <Form>
            <Form.Item
              name="plan_id"
              label="Plan ID"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input disabled={true} />
            </Form.Item>
            <Form.Item
              name="pan_name"
              label="Plan Name"
              rules={[
                {
                  required: true,
                  message: "Enter the Plan Name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="plan_amount"
              label="Plan Amount "
              rules={[
                {
                  required: true,
                  message: "Enter the Plan Amount",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="paln_validity"
              label="Validity Days "
              rules={[
                {
                  required: true,
                  message: "Enter the Plan Validity Days",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button className="btn-save">Save</Button>{" "}
            <Button className="btn-cancel" onClick={()=>{
              setModel(false)
            }}>Cancel</Button>
          </Form>
        }
      />
    </div>
  );
}

export default AddPlans;
