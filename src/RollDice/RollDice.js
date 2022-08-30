import React, { Component } from 'react';
import Die from '../RollDice/Die';
import '../RollDice/RollDice.css'

class RollDice extends Component {
    // RC can specify default vals for missing props by def a static prop called 'defaultProps = {}', just need to declare 'sides' in 'App.js'
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = { die1: 'one', die2: 'one', rolling: false };
        this.roll = this.roll.bind(this);
    }
    roll() {
        // Picking a # b/w 0-5, which serves as the index (pos) for the randomly selected face in the arr 'sides'
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        // Setting the state w/ the 2 new rolls
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });
        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button className='btn btn-primary' onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}

                </button>
            </div>
        )
    }
}

export default RollDice;