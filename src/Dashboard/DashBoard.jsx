import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AddPlans from '../Pages/Plans/AddPlans';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { label: 'Home', key: '1', icon: <PieChartOutlined /> },
  { label: 'Plans', key: '2', icon: <UserOutlined /> },
  {
    label: 'User',
    key: 'sub1',
    icon: <DesktopOutlined />,
    children: [
      { label: 'Tom', key: '3' },
      { label: 'Bill', key: '4' },
      { label: 'Alex', key: '5' },
    ],
  },
  {
    label: 'Team',
    key: 'sub2',
    icon: <TeamOutlined />,
    children: [
      { label: 'Team 1', key: '6' },
      { label: 'Team 2', key: '8' },
    ],
  },
  { label: 'Files', key: '9', icon: <FileOutlined /> },
];

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const token = localStorage.getItem('token');
  console.log('tok', token);

  const handleMenuItemClick = (item) => {
    // Handle the click event for the menu item here
    console.log(`Clicked on item: ${item.key}`);
    // You can perform any actions you need based on the clicked item.
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((child) => (
                    <Menu.Item
                      key={child.key}
                      onClick={() => handleMenuItemClick(child)}
                    >
                      {child.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.label}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* Bill is a cat. */}
            <AddPlans />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          MovieHub ©2023 Created by Dipindas
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
