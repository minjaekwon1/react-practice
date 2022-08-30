import React, { Component } from 'react';

// Showing alt syntax while maintaining sem func as 'BrokenClick.js'
class BrokenClick2 extends Component {
    state = { clicked: false };
    // Below defs the method 'handleClick', then auto binds it to any instance of this RC
    handleClick = e => {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
                {/* Want to use 'this' so React can find the func & not use '()' as then it will be exe immediately */}
                <button onClick={this.handleClick}>Have I been clicked?</button>
                {/* W/o '.bind()', 'this.handleClick' is being called 'out of context' as JS doesn't know who 'this' is */}
                <p></p>
            </div>
        )
    }
}

export default BrokenClick2;