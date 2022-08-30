import React, { Component } from 'react';
import Coin from '../CoinFlip/Coin'

class CoinFlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHead: true,
            totHeads: 0,
            totTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const rand = Math.floor(Math.random() * 2);
        (rand === 0)
            ? this.setState(prevSt => ({
                isHead: true,
                totHeads: prevSt.totHeads + 1
            }))
            : this.setState(prevSt => ({
                isHead: false,
                totTails: prevSt.totTails + 1
            }))

    }
    handleClick() {
        this.flipCoin();
    }
    render() {
        return (
            <div>
                <div><b>Let's flip a coin!</b></div>
                <Coin face={this.state.isHead} />
                <button className='btn btn-sm btn-primary' onClick={this.handleClick}>Click Me!</button>
                <div>{`Of ${this.state.totHeads + this.state.totTails} flips, ${this.state.totHeads} were heads and ${this.state.totTails} tails. `}</div>
            </div>
        )
    }
}

export default CoinFlip;