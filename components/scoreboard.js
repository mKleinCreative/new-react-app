import React, { Component } from 'react'

export default class ScoreBoard extends Component {
  render() {
    const { onPlayerHit, onPlayerStay, onNewGame, allowedToHit } = this.props

    const hitButton = allowedToHit ?
      <button onClick={onPlayerHit}>Hit</button> :
      null
    const stayButton = allowedToHit ?
      <button onClick={onPlayerStay}>Stay</button> :
      null
    const resetButton = allowedToHit ?
      null :
      <button onClick={onNewGame}>New Game</button>
    return (
      <div>
        {hitButton}
        {stayButton}
        {resetButton}
      </div>
    )
  }
}
