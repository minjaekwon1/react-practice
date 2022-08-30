import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            qty: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState({ name: '', qty: '' })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row mb-2">
                    <label className='col-3 col-form-label' htmlFor='name'>Name:</label>
                    <div className="col-9">
                        <input
                            className='form-control'
                            id='name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <label className='col-3 col-form-label' htmlFor='qty'>Qty:&nbsp;</label>
                    <div className="col-9">
                        <input
                            className='form-control'
                            id='qty'
                            name='qty'
                            value={this.state.qty}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className='btn btn-primary'>Add Item</button>
            </form>
        )
    }
}

export default ShoppingListForm;