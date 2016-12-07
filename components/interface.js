import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Outcome from './outcome.js'

export default class Interface extends Component {
render() {
  return (
    <div>
       {/* This will render the Outcome element */}
      <Outcome />
       {/* but the following code is owned by Interface */}
      <div >
        <a>Dealer Score : </a>
        <a>Player Score : </a>
      </div>
      <button>Deal</button>
      <button>Hit</button>
      <button>Stand</button>
   </div>
  );
  }
};
