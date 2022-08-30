import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            height: '',
            width: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addNewBox(this.state);
        this.setState({
            color: '',
            height: '',
            width: ''
        })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='row mb-2'>
                    <label className='col-3 col-form-label' htmlFor='color'>Color:</label>
                    <div className='col-9'>
                        <input
                            type='text'
                            className='form-control'
                            id='color'
                            name='color'
                            value={this.state.color}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className='row mb-2'>
                    <label className='col-3 col-form-label' htmlFor='height'>Height:</label>
                    <div className='col-9'>
                        <input
                            type='text'
                            className='form-control'
                            id='height'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className='row mb-2'>
                    <label className='col-3 col-form-label' htmlFor='width'>Width:</label>
                    <div className='col-9'>
                        <input
                            type='text'
                            className='form-control'
                            id='width'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className='btn btn-primary'>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm