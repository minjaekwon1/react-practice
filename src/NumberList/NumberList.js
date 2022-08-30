import React, { Component } from 'react';
import NumberItem from '../NumberList/NumberItem';

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5] };
        this.remove = this.remove.bind(this);
    }
    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }))
    }
    render() {
        let nums = this.state.nums.map((n, idx) => <NumberItem key={idx} value={n} remove={this.remove} />);
        return (
            <div>
                <h5>First Number List</h5>
                {nums}
            </div>
        )
    }
}

export default NumberList