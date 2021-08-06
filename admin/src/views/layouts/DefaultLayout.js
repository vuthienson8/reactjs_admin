import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import routers from "../../routers";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            location: window.location.pathname,
        };
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed, location } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{ paddingTop: 60 }}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[location]} mode="inline">
                        {routers.map((menu => (
                            !menu.children ? (
                                <Menu.Item key={menu.path} icon={<PieChartOutlined />}>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </Menu.Item>
                            ) : (
                                <SubMenu key={menu.path} icon={<UserOutlined />} title={menu.name}>

                                    {menu.children.map((subMenu) => (
                                        !subMenu.hidden && (
                                            <Menu.Item key={subMenu.path}>
                                                <Link to={subMenu.path}>{subMenu.name}</Link>
                                            </Menu.Item>
                                        )
                                    ))}
                                </SubMenu>
                            )
                        )))}




                    </Menu>
                </Sider>

                <Layout className="site-layout">

                    <Header className="site-layout-background" style={{ padding: 0, color: "white", textAlign: 'center' }}>
                        thienSonVu
                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                            <Switch>
                                {routers.map((menu) => {
                                    return !menu.children ? (
                                        <Route key={menu.path} path="/option">
                                            {menu.component}
                                        </Route>
                                    ) : (
                                        menu.children.map((subMenu) => (
                                            <Route key={menu.path} path={subMenu.path}>{subMenu.component}</Route>
                                        ))
                                    )
                                }

                                )}


                            </Switch>

                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>©2021 Created by Thiensonvu</Footer>
                </Layout>
            </Layout>
        );
    }
}


export default DefaultLayout;