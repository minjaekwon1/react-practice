import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.scss'

class ZenQuote extends Component {
    state = { quote: '', isLoaded: false }
    componentDidMount() {
        // Load the data
        axios.get('https://api.quotable.io/random').then(response => {
            // Then set state w/ that data
            setTimeout(
                function () {
                    this.setState({ quote: response.data.content, isLoaded: true });
                }.bind(this),
                3000
            )
        })
    }
    componentDidUpdate() {
        // console.log('RC has been updated');
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h5>Always remember...</h5>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className="showbox">
                        <div className="loader">
                            <svg className="circular" viewBox="25 25 50 50">
                                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ZenQuote;