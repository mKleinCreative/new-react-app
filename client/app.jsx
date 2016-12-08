import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Interface from '../components/interface.js'
import Table  from '../components/table.js'

export default class App extends Component {
  render() {
    return <Table />
  }
}

ReactDOM.render( <App />, document.getElementById('app') )
