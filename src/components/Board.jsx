import React from "react";
import { useState } from "react";

import Tiles from "./Tiles";

const Board = () => {
    const [value, setValue] = useState(Array(9).fill(null));
    const [userTurn, setUserTurn] = useState(true);

    const winner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (
                value[a] !== null &&
                value[a] === value[b] &&
                value[a] === value[c]
            ) {
                return value[a];
            }
        }

        return false;
    };

    const isWinner = winner();

    const handleClick = (index) => {
        if (value[index] !== null) {
            return alert("Cant tap on already filled Tile!");
        }

        const copyValue = [...value];
        copyValue[index] = userTurn ? "O" : "X";
        setValue(copyValue);
        setUserTurn(!userTurn);
    };

    const replayGame = () => {
        setValue(Array(9).fill(null));
    };

    return (
        <>
        <div className="container">

            <div className="game-board">
                {isWinner ? (
                    <>
                        <h2>Yayyyy You won, {isWinner}</h2>
                    </>
                ) : (
                    <>
                        <div className="board-row">
                            <Tiles
                                value={value[0]}
                                onClick={() => handleClick(0)}
                            />
                            <Tiles
                                value={value[1]}
                                onClick={() => handleClick(1)}
                            />
                            <Tiles
                                value={value[2]}
                                onClick={() => handleClick(2)}
                            />
                        </div>
                        <div className="board-row">
                            <Tiles
                                value={value[3]}
                                onClick={() => handleClick(3)}
                            />
                            <Tiles
                                value={value[4]}
                                onClick={() => handleClick(4)}
                            />
                            <Tiles
                                value={value[5]}
                                onClick={() => handleClick(5)}
                            />
                        </div>
                        <div className="board-row">
                            <Tiles
                                value={value[6]}
                                onClick={() => handleClick(6)}
                            />
                            <Tiles
                                value={value[7]}
                                onClick={() => handleClick(7)}
                            />
                            <Tiles
                                value={value[8]}
                                onClick={() => handleClick(8)}
                            />
                        </div>
                    </>
                )}
            </div>

            <button onClick={() => replayGame()}>Replay Game</button>
        </div>
        
        </>
    );
};

export default Board;
