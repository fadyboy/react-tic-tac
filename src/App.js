import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     PLAYER_ONE_SYMBOL: "X",
  //     PLAYER_TWO_SYMBOL: "O",
  //     currentTurn: "X",
  //     board: [
  //       "", "", "", "", "", "", "", "", ""
  //     ]
  //   }

  // }

  // handleClick(index){
  //   if(this.state.board[index] === ""){
  //     this.state.board[index] = this.state.currentTurn;
  //     this.setState({
  //       board: this.state.board,
  //       currentTurn: this.state.PLAYER_ONE_SYMBOL === this.state.currentTurn ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL

  //     })
  //     console.log("ind ", index);
  //   }
      
  // }
  render() {
    return (
      <Board />
      // <div className="board">
      //   {this.state.board.map((cell, index)=>{
      //     return <div onClick={this.handleClick.bind(this, index)} className="square" key={index}>{cell}</div>
      //   })}
      // </div>
    );
  }
}

export default App;
