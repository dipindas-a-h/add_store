import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Routes from '../Routes/Routes';
import AddPlans from '../Pages/Plans/AddPlans';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));



const App = () => {
  const navigate = useNavigate();

  const [nav,setNav] = useState("home");




  const handleClicked = (param) => {
    console.log("get click",param);
  
    if(param === "plans"){
    console.log("plan");
    setNav("plans")
    navigate(`${Routes.ADD_PLAN}`)
  
    }
  }
  
  
  
  const sideItem = [{
    key: "user",
    label: "USER",
    icon: React.createElement(UserOutlined),
    children: [
      {
        key: "user1",
        label: "User 1",
        onClick: () => handleClicked("User 1 Parameter")
      },
      {
        key: "user2",
        label: "User 2",
        onClick: handleClicked
      },
      {
        key: "user3",
        label: "User 3",
        onClick: handleClicked
      },
    ],
  },
  {
    key: "plans",
    label: "PLANS",
    icon: React.createElement(LaptopOutlined),
    onClick: () => handleClicked("plans")
  }];



  // -------- routes ---------


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
         style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'fixed'
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            marginTop: '11vh',
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={sideItem}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
            marginTop: '4vh'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '75vh',
              background: colorBgContainer,
            }}
          >

            {/* {nav === "plans" &&( */}
<Outlet/>
            {/* )} */}
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
