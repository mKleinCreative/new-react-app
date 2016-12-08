import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { suit, name, rank, symbol } = this.props

    return (
      <div className="card">
        {symbol} {name} {rank} 
      </div>
    )
  }
}
