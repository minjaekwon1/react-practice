import React, { Component } from "react";

class NumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(evt) {
        this.props.remove(this.props.value);
    }
    render() {
        return (
            <span className="mx-2">
                <b>{this.props.value} </b>
                <button className="btn btn-sm btn-danger" onClick={this.handleRemove}>X</button>
            </span>
        );
    }
}

export default NumberItem;
