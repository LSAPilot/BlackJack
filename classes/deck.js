import { Family, Kind } from "../enums/enums.js";

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
            let emptyArr = [];
            cardDeck.push(emptyArr);
            Object.keys(Kind).forEach(kind => {
                emptyArr.push(kind);
                this.cards = cardDeck;
            })
        });
    }
}

let deck = new Deck();
deck.initializeDeck();
console.log(deck.cards);