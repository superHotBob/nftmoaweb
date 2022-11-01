import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styles/theme';
import { useTranslation } from 'react-i18next';

import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(window.innerWidth > 768 ? false : true);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Wrap>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
          <h1 className="logo">
            <Link to="/guide">로고</Link>
          </h1>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to={'/guide'}>가이드</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to={'/publish'}>고객 관리</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <button type="button" className="trigger" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
        </Layout>
        {!collapsed && <SiderDim onClick={() => setCollapsed(!collapsed)} />}
      </Layout>
    </Wrap>
  );
};

const Wrap = styled.div`
  .logo {
    margin-bottom: 4px;
    padding: 16px;

    a {
      display: block;
      height: 32px;
      font-size: 0;
      background: #fff;
    }
  }

  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout-background .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  @media only screen and (max-width: 769px) {
    .ant-layout-has-sider {
      .ant-layout-sider-has-trigger {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        z-index: 10;
      }

      .ant-layout-sider-collapsed {
        flex: 0 0 0 !important;
        left: -100%;
        width: 0 !important;
        max-width: 0 !important;
        min-width: 0 !important;
        z-index: 0;
      }

      .ant-layout-sider-trigger {
        display: none;
      }
    }
  }
`;

const SiderDim = styled.div`
  @media only screen and (max-width: 769px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000a;
    z-index: 5;
  }
`;
