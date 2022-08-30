import React, { Component } from 'react';
import '../Lottery/LotteryBall.css'

class LotteryBall extends Component {
    render() {
        return (
            <div className='LotteryBall'>
                <b>{this.props.num}</b>
            </div>
        )
    }
}

export default LotteryBall;