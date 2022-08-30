import React, { Component } from 'react';

class ClickEvent extends Component {
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={function () { alert('Clicked') }}>Click Me!</button>
                <p></p>
            </div>
        )
    }
}

export default ClickEvent;