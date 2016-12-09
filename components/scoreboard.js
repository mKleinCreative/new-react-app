import React, { Component } from 'react'

export default class ScoreBoard extends Component {
  render() {
    const { onPlayerHit, onPlayerStay, resetGame, allowedToHit } = this.props

    const hitButton = allowedToHit ?
      <button onClick={onPlayerHit}>Hit</button> :
      null
    const stayButton = allowedToHit ?
      <button onClick={onPlayerStay}>Stay</button> :
      null
    const resetButton = allowedToHit ?
      null :
      <button onClick={resetGame}>New Game</button>
    return (
      <div>
        {hitButton}
        {stayButton}
        {resetButton}
      </div>
    )
  }
}

// var Interface = React.createClass({})
//
// handleHitButton = () => {
//
//     //check deck size
//     if(this.state.deck.length < 5){
//         this.state.deck = _.shuffle(this.props.deck);
//     }
//
//     // we shuffle every time so you dont cheat by checking component state :D
//     var shuffled = _.shuffle(this.state.deck);
//
//     // deal a card
//     this.state.player.push(shuffled.pop());
//
//     // compute hand score
//     this.state.playerscore = this.handScore(this.state.player);
//
//     // compute game status
//     if(this.state.playerscore < 21 && this.state.player.length == 5){
//       // five card charlie
//       this.state.status = "win";
//     }
//     if(this.state.playerscore >21){
//         this.state.status = "lose";
//     }
//
//     // update state accordingly
//     this.setState({
//         player :  this.state.player,
//         deck : shuffled,
//         status : this.state.status
//     });
//
// },
//
// export default class ScoreBoard extends Component {
// render() {
//   return (
//     <div>
//        {/* This will render the Outcome element */}
//       <Outcome />
//        {/* but the following code is owned by Interface */}
//       <div >
//         <a>Dealer Score : <Hand totalValue /></a>
//         <a>Player Score : <Hand totalValue /></a>
//       </div>
//       <button>Deal</button>
//       <button>Hit</button>
//       <button>Stand</button>
//    </div>
//   );
//   }
// };
