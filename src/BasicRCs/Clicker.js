import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        // Runs the 'Component' c'tor
        super(props);
        this.state = {
            randNum: 1,
            isWinner: false
        }
        // This binding is necessary to make 'this' work in the callback
        this.randNumGen = this.randNumGen.bind(this);
    }
    randNumGen(e) {
        const rand = Math.ceil(Math.random() * this.props.maxNum);
        this.setState({ randNum: rand });
        if (rand === 7) {
            this.setState({ isWinner: true });
        }
    }
    render() {
        return (
            <div>
                <h5>Number is {this.state.randNum}</h5>
                {this.state.isWinner
                    ? <h5>You Win!!!</h5>
                    : <button className='btn btn-primary' onClick={this.randNumGen}>Random Number</button>
                }
            </div>
        );
    };
}

export default Clicker;