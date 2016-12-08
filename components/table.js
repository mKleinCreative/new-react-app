import _ from 'lodash'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Game from '../src/game'

import Player from './player'
import ScoreBoard from './scoreboard'

export default class Table extends Component {
  constructor( props ) {
    super( props )

    this.state = { game: new Game() }
  }

  hit() {
    this.state.game.hit()
    this.setState({ game: this.state.game })
  }

  render() {
    const { game } = this.state
    console.log( 'I rendered!!', game )

    return (
      <div>
        {game.players.map( (player, index) =>
          <Player {...player} key={`player-${index}`} />
        )}
        <ScoreBoard onPlayerHit={this.hit.bind(this)} />
      </div>
    )
  }
}
