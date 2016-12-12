import React, { Component } from 'react'
import Card from './card'

export default class Player extends Component {
  render() {
    const { name, hand, lowestHandValue, highestHandValue, bestHandValue} = this.props
    return (
      <div className="player">
        <div className="player-name">{name}</div>
        <div className="player-hand">
          {hand.map( (card, index) => <Card {...card} key={`card-${index}`} /> )}
        </div>
          <div className="player-score"> Score:  { bestHandValue } </div>
      </div>
    )
  }
}
