import React, { Component } from "react"
import { Row, Col, Icon } from 'antd'
import "./index.css"

class Project extends Component {
    state = {
        projects: [
            {
                label: "Mikrolokal",
                url: "project-anu"
            },
            {
                label: "Laundry Profile",
                url: "project-anu"
            },
            {
                label: "My Portfolio Website",
                url: "project-anu"
            },
        ]
    }
    render () {
        return (
            <div>
                <span className="footer-item-label">
                    Projects
                </span>
                <ul className="footer-item-list">
                    {this.state.projects.map(item => <li key={item.label}>{item.label}</li>)}
                </ul>
            </div>
        )
    }
}

class Creativity extends Component {
    state = {
        creativities: [
            {
                label: "Music",
                uri: "cr-music"
            },
            {
                label: "Film",
                uri: "cr-film"
            },
            {
                label: "WoodWorking",
                uri: "cr-wood"
            },
            {
                label: "CakeWorking",
                uri: "cr-cake"
            },
        ]
    }
    render() {
        return (
            <div>
                <span className="footer-item-label">
                    Creativity
                </span>
                <ul className="footer-item-list">
                    {this.state.creativities.map(item => <li key={item.label}>{item.label}</li>)}
                </ul>
            </div>
        )
    }
}

class MetaLink extends Component {
    state = {
        links: [
            {
                label: "works",
                url: "",
            },
            {
                label: "contact me",
                url: "",
            },
            {
                label: "tools I use",
                url: "",
            }
        ]
    }
    render() {
        return (
            <div>
                <span className="footer-item-label">
                    Meta Link
                </span>
                <ul className="footer-item-list">
                    {this.state.links.map(item => <li key={item.label}>{item.label}</li>)}
                </ul>
            </div>
        )
    }
}

class SocialMedia extends Component {
    state = {
        medias: [
            {
                name: "Facebook",
                url: "facebook.com/burhanmubarok",
                icon: "facebook"
            },
            {
                name: "Twitter",
                url: "twitter.com/burhanmubarok",
                icon: "twitter"
            },
            {
                name: "Linkedin",
                url: "linkedin.com/burhanmubarok",
                icon: "linkedin"
            }
        ]
    }
    handleClick(){
        console.log('Enter!');
    }

    render(){
        return (
            <div>
                <span className="footer-item-label">
                    Social Media
                </span>
                <ul className="footer-item-list">
                    {this.state.medias.map(item => <li key={item.name}><Icon type={item.icon} /> {item.name}</li>)}
                </ul>
            </div>
        )
    }
}
const CopyRight = () => {
    const author = "@burhanmubarok"
    const year = new Date().getFullYear()
    return (
        <div>
            Copyright {author} {year}
        </div>
    )
}

const Footer = () => (
    <div>
        <div className="footer-metalink">
            <Row type="flex" gutter={24} justify="center">
                <Col span={4}>
                    <Project />
                </Col>
                <Col span={4}>
                    <Creativity />
                </Col>
                <Col span={4}>
                    <MetaLink/>
                </Col>
                <Col span={4}>
                    <SocialMedia />
                </Col>
            </Row>
        </div>
        <div className="footer-copyright">
            <CopyRight />
        </div>
    </div>
)

export default Footer