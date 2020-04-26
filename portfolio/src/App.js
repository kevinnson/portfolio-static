import React, { Component } from 'react';

import './App.css'

import TabList from './components/TabList'
import Body from './components/Body'
import Header from './components/Header'

import ScrollUpButton from "react-scroll-up-button";
import SimpleReactLightbox from "simple-react-lightbox";

export class App extends Component {
    constructor() {
        super();

        this.state = {
            activeTab:  1
        }

        this.changeTab = (id) => {
            this.setState({
                activeTab: id
            })
        }
    }

    render() {
        const tabs = [
            {
                id: 1,
                title: 'Home'
            },
            {
                id: 2,
                title: 'Drawings'
            },
            {
                id: 3,
                title: 'Videos'
            },
            {
                id: 4,
                title: 'Projects'
            },
            {
                id: 5,
                title: 'GitHub'
            }
        ]
        return (
            <div className="body">
                <SimpleReactLightbox>
                    <div className="header">
                        <Header activeTab = { this.state.activeTab }/>
                    </div>
                    <div className="nav-bar">
                        <TabList
                            tabs = { tabs }
                            changeTab = { this.changeTab }
                            activeTab = { this.state.activeTab }
                        />
                    </div>
                    <div className="main-body">
                        <Body activeTab = { this.state.activeTab }/>
                    </div>
                    <ScrollUpButton/>
                </SimpleReactLightbox>
            </div>
        );
    }
}

export default App;
