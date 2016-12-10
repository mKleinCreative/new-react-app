import _ from 'lodash'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Game from '../src/game'

import Player from './player'
import ScoreBoard from './scoreboard'
import GameStatus from './gamestatus'

export default class Table extends Component {
  constructor( props ) {
    super( props )

    this.state = { game: new Game() }
  }

  hit() {
    this.state.game.hit(this.state.game.players[1])
    this.setState({ game: this.state.game })
  }

  stay() {

    // const TSGP = this.state.game.players
    this.state.game.stay(this.state.game.players[1])
    // if (this.players[0].bestHandValue < 17 && player.stay === true) this.state.game.hit(this.state.game.players[0])
    this.setState({ game: this.state.game })
  }

  newGame() {
    this.setState( { game: new Game()} )
  }

  render() {
    const { game } = this.state
    const { status, message } = game

    const allowedToHit = this.state.game.players[1].lowestHandValue < 21 && this.state.game.players[1].stay === false

    return (
      <div>
        {game.players.map( (player, index) =>
          <Player {...player} key={`player-${index}`} />
        )}
        <ScoreBoard
          allowedToHit={allowedToHit}
          onPlayerHit={this.hit.bind(this)}
          onPlayerStay={this.stay.bind(this)}
          onNewGame={this.newGame.bind(this)}
        />
        <GameStatus status={status} message={message} />
      </div>
    )
  }
}
