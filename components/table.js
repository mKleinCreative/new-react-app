import _ from 'lodash'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Game from '../src/game'

import Player from './player'
import ScoreBoard from './scoreboard'
import Outcome from './outcome'

export default class Table extends Component {
  constructor( props ) {
    super( props )

    this.state = { game: new Game() }
  }

  hit() {
    this.state.game.hit(this.state.game.players[1])
    this.setState({ game: this.state.game })
  }

  render() {
    const { game } = this.state

    const allowedToHit = this.state.game.players[1].lowestHandValue < 21

    return (
      <div>
        <Outcome players={this.state.game.players}/>
        {game.players.map( (player, index) =>
          <Player {...player} key={`player-${index}`} />
        )}
        <ScoreBoard onPlayerHit={this.hit.bind(this)} allowedToHit={allowedToHit} />
      </div>
    )
  }
}
