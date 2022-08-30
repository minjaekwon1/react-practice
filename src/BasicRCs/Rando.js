import React, { Component } from 'react'

class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        // this.makeTimer();
    }
    makeTimer() {
        setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum);
            this.setState({ num: rand });
        }, 1000);
    }
    render() {
        return <h5>{this.state.num}</h5>
    }
}

export default Rando;