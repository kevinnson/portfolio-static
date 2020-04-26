import React, { Component, useState } from 'react';

export class Tab extends Component {

    addStyling = () => {
        if (this.props.tab.id === this.props.activeTab) {
            return { backgroundColor: 'DarkCyan' }
        }
        else {
            return { backgroundColor: 'rgb(0, 187, 136)' }
        }
    }

    render() {
        return (
            <div
                className='tab'
                style={ this.addStyling() }
                onClick ={ this.props.changeTab.bind(this, this.props.tab.id) }
            >
                <p>{ this.props.tab.title }</p>
            </div>
        );
    }
}

export default Tab;