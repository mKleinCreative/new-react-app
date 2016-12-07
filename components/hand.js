import React, { Component } from 'react'
import Card from './card.js'


Card.all = function(){

  var cards = []
  suit.forEach(suit => {
    rank.forEach(rank => {
      cards.push(new Card(rank, suit))
    })
  })
  return cards;
}
// How to card get the total
export default class Hand extends Component {
  render() {
    return ( <div>
      <div> <Card rank = "2" suit = "Spade"/> </div>
      <div> <Card rank = "Jack" suit = "Heart"/> </div>
    </div>
    )
  }
  totalValue = "69"
}

// if rank === rank && suit === suit
    // then rerender

    // Deck = card.all
    //
    // Shuffle deck, happens once when we start new game.
    //
    // Deal card: take last card in deck. Then pop off dealt card.
    //
    // function for deal card. At start of game, deal card twice to each player.
    //
    // Hit is just deal card once.
