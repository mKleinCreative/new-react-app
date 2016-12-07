import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Outcome from './outcome.js'
import Hand from './hand.js'
import Dealer from './dealer.js'


export default class Interface extends Component {
render() {
  return (
    <div>
       {/* This will render the Outcome element */}
      <Outcome />
       {/* but the following code is owned by Interface */}
      <div >
        <a>Dealer Score : <Dealer totalValue /></a>
        <a>Player Score : <Hand totalValue /></a>
      </div>
      <button>Deal</button>
      <button>Hit</button>
      <button>Stand</button>
   </div>
  );
  }
};
