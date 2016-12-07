import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Interface from '../components/interface.js'
import Table  from '../components/table.js'

class Foo extends Component {
  constructor(props){
    super(props)
  }
  render() {
   return <div>Foo</div>
  }
}

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
   return <Table />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
