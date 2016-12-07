import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// const Heart = '♥️'
// const Diamond = '♦️'
// const Club = '♣️'
// const Spade = '♠️'
// const ACE = 'A'
// const JACK = 'J'
// const QUEEN = 'Q'
// const KING = 'K'
// const Spade = suit[0]
// const Club = suit[1]
// const Heart = suit[2]
// const Diamond = suit[3]
//
// const suit = [ { name: "Spade",  symbol: "♠️"  }, { name: "Club", symbol: "♣️" }, { name: "Heart", symbol: "♥️" }, { name: "Diamond", symbol: "♦️" } ]

const deck = [ {name:'2s' , value:'2' , symbol: []}, {name:'3s' , value:'3' , symbol: []}, {name:'4s' , value:'4' , symbol: []}, {name:'5s' , value:'5' , symbol: []}, {name:'6s' , value:'6' , symbol: []}, {name:'7s' , value:'7' , symbol: []}, {name:'8s' , value:'8' , symbol: []}, {name:'9s' , value:'9' , symbol: []}, {name:'10s' , value:'10' , symbol: []}, {name:'Js' , value:'10' , symbol: []}, {name:'Qs' , value:'10' , symbol: []}, {name:'Ks' , value:'10' , symbol: []}, {name:'As' , value:'11' , symbol: []}, {name:'2c' , value:'2' , symbol: []}, {name:'3c' , value:'3' , symbol: []}, {name:'4c' , value:'4' , symbol: []}, {name:'5c' , value:'5' , symbol: []}, {name:'6c' , value:'6' , symbol: []}, {name:'7c' , value:'7' , symbol: []}, {name:'8c' , value:'8' , symbol: []}, {name:'9c' , value:'9' , symbol: []}, {name:'10c' , value:'10' , symbol: []}, {name:'Jc' , value:'10' , symbol: []}, {name:'Qc' , value:'10' , symbol: []}, {name:'Kc' , value:'10' , symbol: []}, {name:'Ac' , value:'11' , symbol: []}, {name:'2h' , value:'2' , symbol: []}, {name:'3h' , value:'3' , symbol: []}, {name:'4h' , value:'4' , symbol: []}, {name:'5h' , value:'5' , symbol: []}, {name:'6h' , value:'6' , symbol: []}, {name:'7h' , value:'7' , symbol: []}, {name:'8h' , value:'8' , symbol: []}, {name:'9h' , value:'9' , symbol: []}, {name:'10h' , value:'10' , symbol: []}, {name:'Jh' , value:'10' , symbol: []}, {name:'Qh' , value:'10' , symbol: []}, {name:'Kh' , value:'10' , symbol: []}, {name:'Ah' , value:'11' , symbol: []}, {name:'2d' , value:'2' , symbol: []}, {name:'3d' , value:'3' , symbol: []}, {name:'4d' , value:'4' , symbol: []}, {name:'5d' , value:'5' , symbol: []}, {name:'6d' , value:'6' , symbol: []}, {name:'7d' , value:'7' , symbol: []}, {name:'8d' , value:'8' , symbol: []}, {name:'9d' , value:'9' , symbol: []}, {name:'10d' , value:'10' , symbol: []}, {name:'Jd' , value:'10' , symbol: []}, {name:'Qd' , value:'10' , symbol: []}, {name:'Kd' , value:'10' , symbol: []}, {name:'Ad' , value:'11' , symbol: []} ]
console.log('LOOKATMEE', deck[0] );


// const rank = [ {name: ACE, value:11}, {name: '2', value:2}, {name: '3', value:3}, {name: '4', value:4}, {name: '5', value:5}, {name: '6', value:6}, {name: '7', value: 7}, {name: '8', value: 8}, {name: '9', value: 9}, {name: '10', value: 10}, {name: 'JACK', value: 10}, {name: 'QUEEN', value: 10}, {name: 'KING', value: 10} ]

export default class Card extends Component {
  constructor( props ) {
    super( props )
    // if (!rank) throw new Error('rank is poopy')
    // if (!suit) throw new Error('suit is poopered')

  }
  render(){
    return <div>{this.props.deck}</div>
  }
  toString() {
    return `${this.name}`
  }

  // isAce() {
  //   return this.deck === ACE
  // }
}
Card.deck = deck
// Card.suit = suit

// Card.rank = rank
// Card.Heart = Heart
// Card.Diamond = Diamond
// Card.Club = Club
// Card.Spade = Spade
//
// Card.ACE = ACE
// Card.JACK = JACK
// Card.QUEEN = QUEEN
// Card.KING = KING
