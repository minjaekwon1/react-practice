import React, { Component } from 'react';
import '../RollDice/Die.css'

class Die extends Component {
    render() {
        return (
            <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking'}`} />
        );
    }
}

export default Die;