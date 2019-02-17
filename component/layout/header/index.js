import React from "react"
import { Layout, Menu } from "antd";
import "./index.css"

const Header = () => (
    <Layout.Header
        className="transparent"
    >
        <Brand />
        <Menus />
    </Layout.Header>
)

const Brand = () => (
    <div className="brand">
        Burubur.com
    </div>
)

const Menus = () => (
    <div>
        <Menu
            mode="horizontal"
            className="transparent"
            style={{lineHeight:"64px", textAlign:"end", borderBottom: "0px"}}
            defaultSelectedKeys={["home"]}
        >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="portfolio">Portfolio</Menu.Item>
            <Menu.Item key="creativity">Creativity</Menu.Item>
        </Menu>
    </div>
)

export default Header