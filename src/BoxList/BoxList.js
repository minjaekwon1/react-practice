import React, { Component } from 'react'
import Box from '../BoxList/Box'
import NewBoxForm from '../BoxList/NewBoxForm';
import { v4 as uuid } from 'uuid'

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        }
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }
    addBox(box) {
        // Want to set the id here so it doesn't get changed when the RC is re-rendered
        const newBox = { ...box, id: uuid() }
        this.setState((st) => ({
            boxes: [...st.boxes, newBox]
        }))

    }
    deleteBox(itemID) {
        const newBox = this.state.boxes.filter(box => box.id !== itemID)
        this.setState({
            boxes: newBox
        })
    }
    renderBoxes() {
        return (
            this.state.boxes.map(box => (
                <Box key={box.id} itemID={box.id} color={box.color} height={box.height} width={box.width} deleteBox={this.deleteBox} />
            ))
        )
    }
    render() {
        return (
            <div>
                <NewBoxForm addNewBox={this.addBox} />
                {this.renderBoxes()}
            </div>
        )
    }
}

export default BoxList;