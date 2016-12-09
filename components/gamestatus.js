import React, { Component } from 'react'

export default class GameStatus extends Component {
  render() {
    const { message } = this.props

    return (
      <div>
        {message}
      </div>
    )
  }
}
