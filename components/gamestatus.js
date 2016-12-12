import React, { Component } from 'react'

export default class GameStatus extends Component {
  render() {
    const { message } = this.props
    const blackjack = this.props.BLERKJERK ? <div class="blackajacka"></div> : null
    return (
      <div>
        {message}
      </div>
    )
  }
}
