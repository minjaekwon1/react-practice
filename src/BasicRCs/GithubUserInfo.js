import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    state = { imgUrl: '', name: '' }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`
        let response = await axios.get(url);
        let data = response.data;
        this.setState({ imgUrl: data.avatar_url, name: data.name })
    }
    render() {
        return (
            <div>
                <h5>Github User: {this.state.name}</h5>
                <img src={this.state.imgUrl} style={{ width: 150 }} />
            </div>
        );
    }
}

export default GithubUserInfo;