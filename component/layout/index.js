import React from "react"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import { Layout } from 'antd'

const CommonLayout = () => (
    <Layout>
        <Layout.Header>
            <Header />
        </Layout.Header>
        <Layout.Content>
            <Content />
        </Layout.Content>
        <Layout.Footer>
            <Footer />
        </Layout.Footer>
    </Layout>
)

export {
    CommonLayout
}