import React, { Component } from 'react'
import './TicTacToe.css'

class TicTacToe extends Component {
    constructor(){
        super();
        this.state = {
            player_turn : 'X',
            board: ['', '','','','','','','','']
        }
    }
    squareClicked(index){
        console.log(this.state.player_turn)
        let player_turn = this.state.player_turn
        let board = this.state.board

        board[index] = player_turn;

        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < winCombos.length; i++){
            let winning_row = winCombos[i];
            let p1 = winning_row[0];
            let p2 = winning_row[1]
            let p3 = winning_row[2]
            if(board[p1]!= '' && board[p1] === board[p2] && board[p2] === board[p3] && board[p3] === board[p1]){
                alert(`winner player ${player_turn} has won the game`)
            }
        }

        player_turn = (player_turn === 'X') ? 'O' : 'X';
        console.log('player turn', player_turn);

        this.setState({
            player_turn: player_turn,
            board: board
        })
        
    }
    render() {
        return (
            <div>
                <h1>TicTacToe</h1>
                <div className='board'>
                    {this.state.board.map((square, index) => {
                        return (<div onClick={() => this.squareClicked(index)} className='square'><h3>{square}</h3></div>)
                    })}
                </div>
            </div>
        )
    }
}

export default TicTacToe;
