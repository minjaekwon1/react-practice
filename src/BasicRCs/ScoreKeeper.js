import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill() {
        this.setState({ score: this.state.score + 1 });
    }
    // Below is the bad version, only the last 'setState()' is triggered
    /* tripleKill() {
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
    } */
    // If a call to 'setState()' depends on the cur state, pass in a CB w/ the cur state as a param that rets an obj rep the new state
    /* tripleKill() {
        this.setState(st => {
            return { score: st.score + 1 };
        });
        this.setState(st => {
            return { score: st.score + 1 };
        });
        this.setState(st => {
            return { score: st.score + 1 };
        });
    } */
    // An EX) of 'Functional setState', which lets u describe ur state updates abstractly (hiding the how?) as separate funcs
    incrementScore(curSt) {
        return { score: curSt.score + 1 };
    }
    tripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    render() {
        return (
            <div>
                <h5>Score is: {this.state.score}</h5>
                <button className='btn btn-primary' onClick={this.singleKill} style={{ marginRight: 3 + 'px' }}>Single Kill!</button>
                <button className='btn btn-primary' onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        )
    }
}

export default ScoreKeeper;
