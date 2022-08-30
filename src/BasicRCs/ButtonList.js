import React, { Component } from 'react';

class ButtonList extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'silver' };
    }
    static defaultProps = {
        colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
    }
    changeColor(newColor) {
        this.setState({ color: newColor });
        // As a side note, the event obj is passed in as the 2nd arg
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.color, borderRadius: 5 }}>
                {
                    this.props.colors.map((c, idx) => {
                        const colorObj = { backgroundColor: c };
                        return <button key={idx} className='btn btn-secondary m-2' style={colorObj} onClick={this.changeColor.bind(this, c)}>Click on me!</button>
                    })
                }
            </div >
        );
    }
}

export default ButtonList;