import React, { Component } from 'react'

// Showing alt syntax while maintaining sem func as 'Game.js'
// When you use 'create-react-app', it installs a Babel plug-in that converts this non-valid JS syntax into JS that works in React
class Game2 extends Component {
    state = {
        score: 0,
        gameOver: false
    };
    render() {
        return (
            <div>
                <h1>Your score is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game2;