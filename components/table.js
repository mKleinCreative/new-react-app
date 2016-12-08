import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hand from './hand.js'
import Interface from './interface.js'



export default class Table extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      deck : [
        {name:'2s' , value:'2' , symbol: []},
        {name:'3s' , value:'3' , symbol: []},
        {name:'4s' , value:'4' , symbol: []},
        {name:'5s' , value:'5' , symbol: []},
        {name:'6s' , value:'6' , symbol: []},
        {name:'7s' , value:'7' , symbol: []},
        {name:'8s' , value:'8' , symbol: []},
        {name:'9s' , value:'9' , symbol: []},
        {name:'10s' , value:'10' , symbol: []},
        {name:'Js' , value:'10' , symbol: []},
        {name:'Qs' , value:'10' , symbol: []},
        {name:'Ks' , value:'10' , symbol: []},
        {name:'As' , value:'11' , symbol: []},
        {name:'2c' , value:'2' , symbol: []},
        {name:'3c' , value:'3' , symbol: []},
        {name:'4c' , value:'4' , symbol: []},
        {name:'5c' , value:'5' , symbol: []},
        {name:'6c' , value:'6' , symbol: []},
        {name:'7c' , value:'7' , symbol: []},
        {name:'8c' , value:'8' , symbol: []},
        {name:'9c' , value:'9' , symbol: []},
        {name:'10c' , value:'10' , symbol: []},
        {name:'Jc' , value:'10' , symbol: []},
        {name:'Qc' , value:'10' , symbol: []},
        {name:'Kc' , value:'10' , symbol: []},
        {name:'Ac' , value:'11' , symbol: []},
        {name:'2h' , value:'2' , symbol: []},
        {name:'3h' , value:'3' , symbol: []},
        {name:'4h' , value:'4' , symbol: []},
        {name:'5h' , value:'5' , symbol: []},
        {name:'6h' , value:'6' , symbol: []},
        {name:'7h' , value:'7' , symbol: []},
        {name:'8h' , value:'8' , symbol: []},
        {name:'9h' , value:'9' , symbol: []},
        {name:'10h' , value:'10' , symbol: []},
        {name:'Jh' , value:'10' , symbol: []},
        {name:'Qh' , value:'10' , symbol: []},
        {name:'Kh' , value:'10' , symbol: []},
        {name:'Ah' , value:'11' , symbol: []},
        {name:'2d' , value:'2' , symbol: []},
        {name:'3d' , value:'3' , symbol: []},
        {name:'4d' , value:'4' , symbol: []},
        {name:'5d' , value:'5' , symbol: []},
        {name:'6d' , value:'6' , symbol: []},
        {name:'7d' , value:'7' , symbol: []},
        {name:'8d' , value:'8' , symbol: []},
        {name:'9d' , value:'9' , symbol: []},
        {name:'10d' , value:'10' , symbol: []},
        {name:'Jd' , value:'10' , symbol: []},
        {name:'Qd' , value:'10' , symbol: []},
        {name:'Kd' , value:'10' , symbol: []},
        {name:'Ad' , value:'11' , symbol: []}
      ]
    }
  }

render() {
  console.log(this.state.deck[9].name)
  const deck = this.state.deck
  const cardOne = deck[0].name
  const cardTwo = deck[1].name
  return (
    <div>
      <div> <Hand deck= {deck}/> </div>
      <div> <Interface deck= {deck}/> </div>
      {/* <div> <Hand cardOne={cardOne} cardTwo={cardTwo}/> </div> */}
      <div> <Hand deck= {deck}/> </div>
    </div>
  );
 }

}
