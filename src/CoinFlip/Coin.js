import React, { Component } from 'react'
import Heads from '../CoinFlip/coinHeads.png'
import Tails from '../CoinFlip/coinTails.png'
import '../CoinFlip/Coin.css'

class Coin extends Component {
    render() {
        return <div>
            <img className='Coin-img' src={this.props.face ? Heads : Tails} alt='coin' />
        </div>
    }
}

export default Coin;