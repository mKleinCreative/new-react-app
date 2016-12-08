import React, { Component } from 'react'
import Card from './card'

// handScore : function(hand){
//   var score = _.sum(hand, 'value');
// }

export default class Player extends Component {
  render() {
    const { name, hand } = this.props

    return (
      <div className="player">
        <div className="player-name">{name}</div>
        <div className="player-hand">
          {hand.map( (card, index) => <Card {...card} key={`card-${index}`} /> )}
        </div>
        <div className="player-score">
        </div>
      </div>
    )
  }
}
