import React, { Component } from 'react';

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        // [evt.target.name] becomes whatever val is in the 'name' prop
        // For the 1st form input, it would become 'username'
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='form-control mb-2'
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        className='form-control mb-2'
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}

                    />
                    <input
                        className='form-control mb-2'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}

export default MultipleForm;