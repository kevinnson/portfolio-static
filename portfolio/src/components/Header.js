import React, { Component } from 'react';

export class Header extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if (activeTab === 1) {
            return <h1>Welcome to my portfolio!</h1>
        }
        else if (activeTab === 2) {
            return <h1>Drawings</h1>
        }
        else if (activeTab === 3) {
            return <h1>Favorite Songs from YouTube</h1>
        }
        else if (activeTab === 4) {
            return <h1>Projects</h1>
        }
        else {
            return ""
        }
    }
    render() {
        return (
            this.displayContent()
        );
    }
}

export default Header;
