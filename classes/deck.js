import { Family, Kind } from "../enums/enums.js";
import { Card } from "./card.js";

class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    getCards() {
        return this.cards;
    }
    
    initializeDeck() {
        let cardDeck = [];

        Object.values(Family).forEach(family => {
            Object.entries(Kind).forEach(([kindName, kindValue]) => {
                const card = new Card(kindName, family, kindValue);
                cardDeck.push(card);
            })
        });
        this.cards = cardDeck;
    }
}

let deck = new Deck();
deck.initializeDeck();
console.log(deck.cards);