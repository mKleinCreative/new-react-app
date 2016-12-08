import React, { Component } from 'react'
import Card from './card.js'
import deck from './table.js'
// import deck from './card.js'


export default class Hand extends Component() {
  render(){
    return (
      <div>
        <div> <Card deck={this.deck} /> </div>
        <div> <Card deck={this.deck} /> </div>
      </div>
    )
  }
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
