import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import './DeckOfCards.css';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class DeckOfCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck_id: '',
            success: true,
            cardData: []
        }
        this.newCard = this.newCard.bind(this);
    }
    async componentDidMount() {
        try {
            const res = await axios.get(`${API_BASE_URL}/new/shuffle`);
            this.setState({
                deck_id: res.data.deck_id,
            });
        } catch (e) {
            console.error(e);
        }
    }
    async newCard() {
        const cardURL = `${API_BASE_URL}/${this.state.deck_id}/draw/`;
        try {
            const res = await axios.get(cardURL);
            if (!res.data.success) throw new Error('No cards remaining');
            const newCard = { deck_img: res.data.cards[0].image, key: uuid() }
            this.setState((st) => ({
                cardData: [...st.cardData, newCard]
            }))
        } catch (e) {
            this.setState({ success: false })
            console.log(e);
        }
    }
    render() {
        const cards = this.state.cardData.map(data => <Card key={data.key} img={data.deck_img} />)
        return (
            <div className='DeckOfCards'>
                {this.state.success
                    ? <div>
                        <button className='btn btn-dark' onClick={this.newCard}>Gimme a card!</button>
                        {cards}
                    </div>
                    : <div>
                        <h5>You went through the whole deck!</h5>
                    </div>
                }
            </div>
        )
    }
}

export default DeckOfCards;