import React, { Component } from 'react';

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        // The '.bind()' method creates a new func that, when called, has its 'this' keyword set to the provided val
        // Binds 'this.handleClick' to the 3rd 'this' (rep the module)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h5>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h5>
                {/* Want to use 'this' so React can find the func & not use '()' as then it will be exe immediately */}
                <button className='btn btn-primary' onClick={this.handleClick}>Have I been clicked?</button>
                {/* W/o '.bind()', 'this.handleClick' is being called 'out of context' as JS doesn't know who 'this' is */}
            </div>
        )
    }
}

export default BrokenClick;