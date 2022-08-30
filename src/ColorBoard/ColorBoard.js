import React, { Component } from 'react';
import ColorBox from '../ColorBoard/ColorBox';
import '../ColorBoard/ColorBoard.css';
import { v4 as uuid } from 'uuid';

class ColorBoard extends Component {
    static defaultProps = {
        numRows: 4,
        numCols: 4,
        colors: [
            'gray', 'black', 'navy', 'lime', 'red', 'olive', 'aqua', 'purple', 'yellow', 'maroon', 'pink', 'violet', 'salmon', 'darkseagreen', 'plum', 'orange', 'brown', 'skyblue', 'silver', 'lavender', 'slateblue', 'greenyellow', 'indigo', 'green', 'teal', 'steelblue'
        ]
    }
    render() {
        return (
            <div>
                {/* A nested loop to render the 'ColorBoard' I want */}
                {Array.from({ length: this.props.numRows }).map(() => (
                    <div key={uuid()} className='ColorBoard-row'>
                        {Array.from({ length: this.props.numCols }).map(() => (
                            <ColorBox key={uuid()} colors={this.props.colors} />
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default ColorBoard;