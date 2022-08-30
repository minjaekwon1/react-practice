import React, { Component } from 'react';
import { choice } from '../ColorBoard/helpers.js';
import '../ColorBoard/Colorbox.css'

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.colors)
        }
        this.randColor = this.randColor.bind(this);
    }
    randColor() {
        let newColor;
        // If the new color is the same as the old one, keep changing it
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color)
        // Then set the new diff color to the state prop, 'color' 
        this.setState({
            color: newColor
        })
    }
    render() {
        return <div className='ColorBox' style={{ backgroundColor: this.state.color }} onClick={this.randColor}></div >
    }
}

export default ColorBox;