import React, { Component } from 'react';

class WiseSquare extends Component {
    /* constructor(props) {
        super(props);
        // Can Method Bind in the c'tor (way we've been doing it)
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    } */
    static defaultProps = {
        messages: [
            "Don't be a dumbass",
            "Keep on swimming",
            "Ripperinos"
        ]
    }
    // An experimental way to Method Bind is using the below syntax
    dispenseWisdom = () => {  // instead of 'dispenseWisdom() {'
        console.log('This is ...', this);
        const { messages } = this.props;
        let rIdx = Math.floor(Math.random() * messages.length);
        console.log(messages[rIdx]);
    }
    render() {
        return (
            <div>
                <button onMouseEnter={() => this.dispenseWisdom()} className='btn btn-primary mt-4'>Hover over for advice!</button>

                {/* Can Method Bind using an arrow func */}
                {/* <button onMouseEnter={() => this.dispenseWisdom()}>Hover over for advice!</button> */}

                {/* Can Method Bind using '.bind()' inline */}
                {/* <button onMouseEnter={this.dispenseWisdom.bind(this)}>Hover over for advice!</button> */}
                <p className='mt-4'>This RC is being used to demonstrate the 3 types of <b>Method Binding</b>.</p>
            </div>
        )
    }
}

export default WiseSquare;