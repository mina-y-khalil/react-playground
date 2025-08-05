// import { useState } from 'react';

//2D array


export default function Gameboard({ onSelectSquare, board }) {
    let gameBoard = initialGameBoard.map(row => [...row]); // this called driven state 



    // const [gameBoard, setGameBoard] = useState(initialGameBoard);


    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // here is brand new array from prev state and here we are updating it immutably and this is strongly recommended
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();

    // }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}