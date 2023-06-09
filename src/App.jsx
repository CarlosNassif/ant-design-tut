import './App.css';
import 'antd/dist/reset.css';

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  Card,
  Col,
  Layout,
  Menu,
  Row,
  theme,
  Typography,
} from 'antd';
import React from 'react';
import { useState } from 'react';

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout className='site-layout'>
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
            <Title>Grid</Title>
            <Row gutter={16}>
              <Col>
                <Card
                  title='Default size card'
                  extra={<a href='#'>More</a>}
                  style={{
                    width: 300,
                  }}
                >
                  <Title>Dashboard</Title>
                </Card>
              </Col>
              <Col>
                <Card
                  title='Default size card'
                  extra={<a href='#'>More</a>}
                  style={{
                    width: 300,
                  }}
                >
                  <Title>Dashboard</Title>
                </Card>
              </Col>
              <Col>
                <Card
                  title='Default size card'
                  extra={<a href='#'>More</a>}
                  style={{
                    width: 300,
                  }}
                >
                  <Title>Dashboard</Title>
                </Card>
              </Col>
              <Col>
                <Card
                  size='small'
                  title='Small size card'
                  extra={<a href='#'>More</a>}
                  style={{
                    width: 300,
                  }}
                >
                  <Title>Dashboard</Title>
                </Card>
              </Col>
            </Row>
            <br />
            <Title>Flexbox</Title>
            <Row
              style={{
                display: 'flex',
                marginTop: 32,
              }}
            >
              <Col>
                <Card
                  style={{
                    flex: 1,
                    height: 300,
                  }}
                >
                  <Title>cool</Title>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    flex: 1,
                    height: 300,
                  }}
                >
                  <Title>cool</Title>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    flex: 1,
                    height: 300,
                  }}
                >
                  <Title>cool</Title>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    flex: 1,
                    height: 300,
                  }}
                >
                  <Title>cool</Title>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
