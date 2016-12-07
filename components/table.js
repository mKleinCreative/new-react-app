import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hand from './hand.js'
import Dealer from './dealer.js'
import Interface from './interface.js'

export default class Table extends Component {
render() {
  return (
    <div>
      <div> <Dealer /> </div>
      <div> <Interface /> </div>
      <div> <Hand /> </div>
    </div>
  );
 }
};
