import React from "react"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import { Layout } from 'antd'
import "./index.css"

const CommonLayout = () => (
    <Layout>
        <Layout.Header className="header-bar">
            <Header />
        </Layout.Header>
        <Layout.Content>
            <Content />
        </Layout.Content>
        <Layout.Footer className="footer">
            <Footer />
        </Layout.Footer>
    </Layout>
)

export {
    CommonLayout
}