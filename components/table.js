import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hand from './hand.js'
import Interface from './interface.js'

export default class Table extends Component {
render() {
  return (
    <div>
      <Hand />
      <Interface />
      <Hand />
    </div>
  );
 }
};
