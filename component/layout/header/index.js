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

const menuStyle = {
    borderBottom: "2px solid #ee9ca7",
    color: "#777"
}

const Menus = () => (
    <div>
        <Menu
            mode="horizontal"
            className="transparent"
            style={{lineHeight:"64px", textAlign:"end", borderBottom: "0px"}}
            defaultSelectedKeys={["home"]}
        >
            <Menu.Item key="home" style={menuStyle}>Home</Menu.Item>
            {/* <Menu.Item key="portfolio" style={menuStyle}>Portfolio</Menu.Item>
            <Menu.Item key="creativity" style={menuStyle}>Creativity</Menu.Item> */}
        </Menu>
    </div>
)

export default Header