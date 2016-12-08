import React, { Component } from 'react'
import Card from './card'
import _ from 'lodash'


export default class Player extends Component {
  render() {
    const { name, hand, score } = this.props
    const handScore = () => {
      var acc = 0
      for (var i = 0; i < hand.length; i++) {
        acc += hand[i].value
      }
      return acc
    }
    console.log('far', hand.length );

    return (
      <div className="player">
        <div className="player-name">{name}</div>
        <div className="player-hand">
          {hand.map( (card, index) => <Card {...card} key={`card-${index}`} /> )}
        </div>
          <div className="player-score"> Score:  { handScore() } </div>
      </div>
    )
  }
}
