import React, { Component } from 'react';
import Cell from './Cell';
import Results from './Results';

class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            board: [
                "", "", "", "", "", "", "", "", ""
            ],
            playerOne: "X",
            playerTwo: "O",
            currentPlayer: "X",
            winner: ""
        }
    }

    handleClick(id){
        if(this.state.board[id] === ""){
            const board = this.state.board;
            board[id] = this.state.currentPlayer;
            this.setState({
                board: board,
                currentPlayer: this.state.currentPlayer === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
            });

            const winner = this.checkForWinner(this.state.board);
            if(winner !== null){
                this.setState({
                    winner: `The winner is ${winner}!` 
                });
            }
        }
        
    }

    checkForWinner(board){
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        // check cells to see if entries in cells are equal to any of the winning combos
        // 
        for(let i = 0; i < winningCombos.length; i++){
            const [a, b, c] = winningCombos[i];
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                return board[a];
            }
        }
        return null;
    }

    resetBoard(){
        this.setState({
            board: [
                "", "", "", "", "", "", "", "", ""
            ],
            winner: ""
        })

    }

    render(){
        var boardGrid = this.state.board;
        
        return (
            <div>
                <Results winner={this.state.winner} reset={this.resetBoard.bind(this)}/>
                <div className="board">
                    {boardGrid.map((cell, index)=>{
                    return (
                        <Cell 
                        key={index} 
                        cell={this.state.board[index]} 
                        ind={index}  
                        handle={this.handleClick.bind(this, index)}
                        />
                      ) 
                    })}
                </div>
            </div>
        )
    }
}

export default Board;