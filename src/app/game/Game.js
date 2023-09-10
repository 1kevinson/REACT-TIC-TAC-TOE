import Board from "./Board";
import {useState} from "react";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length -1];

    function handlePlay(nextSquares) {
        // TODO: kevinkouomeu - 10/09/2023 :: add method algo
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>
                {/* todo */}
                </ol>
            </div>
        </div>
    );
}