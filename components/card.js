import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// const Heart = '♥️'
// const Diamond = '♦️'
// const Club = '♣️'
// const Spade = '♠️'
const ACE = 'A'
const JACK = 'J'
const QUEEN = 'Q'
const KING = 'K'

const suit = [ { name: "Spade",  symbol: "♠️"  }, { name: "Club", symbol: "♣️" }, { name: "Heart", symbol: "♥️" }, { name: "Diamond", symbol: "♦️" } ]

const Spade = suit[0]
const Club = suit[1]
const Heart = suit[2]
const Diamond = suit[3]

const rank = [ {name: ACE, value:11}, {name: '2', value:2}, {name: '3', value:3}, {name: '4', value:4}, {name: '5', value:5}, {name: '6', value:6}, {name: '7', value: 7}, {name: '8', value: 8}, {name: '9', value: 9}, {name: '10', value: 10}, {name: 'JACK', value: 10}, {name: 'QUEEN', value: 10}, {name: 'KING', value: 10} ]

export default class Card extends Component {
  constructor( props ) {
    super( props )
    // if (!rank) throw new Error('rank is poopy')
    // if (!suit) throw new Error('suit is poopered')

  }
  render(){
    return <div>{this.props.rank}{this.props.suit}</div>
  }
  toString() {
    return `${this.rank}`
  }

  isAce() {
    return this.rank === ACE
  }
}

Card.suit = suit

Card.rank = rank
Card.Heart = Heart
Card.Diamond = Diamond
Card.Club = Club
Card.Spade = Spade

Card.ACE = ACE
Card.JACK = JACK
Card.QUEEN = QUEEN
Card.KING = KING
