import React, { Component } from 'react';

class IconList extends Component {
    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'baby',
            'bell',
            'bone',
            'car',
            'couch',
            'cloud',
            'archway'
        ]
    }
    constructor(props) {
        super(props);
        this.state = { icons: ['bone'] };
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        // Below is the bad way to update the state's Data Structure (DS)
        /* let oldIcons = this.state.icons;
        oldIcons.push(newIcon);
        this.setState({ icons: oldIcons }) */

        // Below is EX) of correct method to update the state's DS
        // Instead of pushing, make a new arr & add on the 'newIcon'
        this.setState({ icons: [...this.state.icons, newIcon] });

    }
    render() {
        const icons = this.state.icons.map((i, idx) => <i key={idx} className={`fas fa-${i}`} />);
        return (
            <div>
                <h5>Icons: {icons}</h5>
                <button className='btn btn-primary' onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    }
}

export default IconList;