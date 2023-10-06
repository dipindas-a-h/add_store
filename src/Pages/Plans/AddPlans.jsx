import React, { useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import AddButton from '../../components/Buttons/AddNewButton/AddButton';
import { Table } from 'antd';
import Models from '../../components/Models/Models';

function AddPlans() {

  const [model,setModel] = useState(false);


  const columns = [
    {
      title: "SI No.",
      dataIndex: 'sino',
      align: 'center',
      width: 80,
    },
    {
      title: "Plan No.",
      dataIndex: 'plan_no',
      align: 'center',
      width: 120,
    },
    {
      title: "Plan Name",
      dataIndex: 'plan_name',
      align: 'center',
      width: 200,
    },
    {
      title: "Date",
      dataIndex: 'date',
      align: 'center',
      width: 100,
    },
    {
      title: "Price",
      dataIndex: 'price',
      align: 'center',
      width: 80,
    },
  ];

  const data = [
    {
      key: '1',
      sino: 1,
      plan_no: "p-01",
      plan_name: "golden",
      date: "10-12-2002",
      price: "30,000"
    }
  ];

  return (
    <div>
      <SubHeading heading={"Plans"} />
      <div className="col-12 d-flex justify-content-end mt-3">
        <AddButton label={"ADD PLAN"}/>
      </div>
      <div className="col-12 mt-3">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false} // Disable pagination for a single-page table
          scroll={{ x: 'max-content' }} // Enable horizontal scrolling for overflowing content
          bordered
        />
      </div>
      <Models isModalOpen={ model}/>
    </div>
  );
}

export default AddPlans;
