import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.deleteBox(this.props.itemID);
    }
    render() {
        const boxStyle = {
            backgroundColor: this.props.color,
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            borderRadius: '10%'
        }
        return (
            <div className='d-flex align-items-center'>
                <div className='mt-2 d-inline-block' style={boxStyle}></div>
                <button className='btn btn-danger ms-2' onClick={this.handleClick}><b>X</b></button>
            </div>
        )
    }
}

export default Box;