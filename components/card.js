import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import deck from './table.js'

export default class Card extends Component {
  constructor( props ) {
    super( props )
  }
  render(){
    return this.deck
  }
  // toString() {
  //   return `${this.deck.name}`
  // }
}
