import React, { Component } from 'react';
import LotteryBall from '../Lottery/LotteryBall'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numBalls })
        };
        this.handleClick = this.handleClick.bind(this);
    }
    createBalls() {
        this.setState(curSt => ({
            nums: curSt.nums.map(
                n => Math.ceil(Math.random() * this.props.maxNum)
            )
        }))
        // Below was my method to spin the lotto
        /* const newBalls = [];
        for (let i = 0; i < this.props.numBalls; i++) {
            newBalls.push(Math.ceil(Math.random() * this.props.maxNum));
        }
        this.setState({ nums: newBalls }); */
    }
    handleClick() {
        this.createBalls();
    }
    render() {
        // Can use '()' instead of '{}' to implicitly ret a val from an arrow func OR just not use '()' if body is only a single expr
        // General rule of thumb is that if you're only 'transforming' data, better to use an implicit ret
        return (
            <div>
                <h5>{this.props.title}</h5>
                {this.state.nums.map((ball, idx) => (< LotteryBall key={idx} num={ball} />))}
                <div>
                    <button className='btn btn-primary btn-sm my-2' onClick={this.handleClick}>Spin!</button>
                </div>
            </div>
        )
    }
}

export default Lottery;