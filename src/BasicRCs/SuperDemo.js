import React, { Component } from 'react'

class SuperDemo extends Component {
    // eslint-disable-next-line
    constructor(props) {
        // Used to call the constructor of its parent class to access the parent's props & methods
        super(props);
        // If we want access to 'this.props' in the c'tor, need to pass 'props' into 'super()'; otherwise below will print 'undefined' 
        /* console.log(this.props); */
    }
    render() {
        return <div>The 'animal' prop is: <b>{this.props.animal}</b></div>;
    }
}

export default SuperDemo;