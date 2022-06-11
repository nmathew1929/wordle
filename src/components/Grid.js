import { useState } from 'react'
import GameRow from './GameRow'
import './Grid.css'

function Grid() {
    const [focusedArr, setFocusedArr] = useState([true, false, false, false, false])
    const wordle = 'NINJA';
    return (
        <div id="board-container">
            <div id="row">
                <GameRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {wordle} focus={focusedArr[0]}></GameRow>            
                <GameRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {wordle} focus={focusedArr[1]}></GameRow>            
                <GameRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {wordle} focus={focusedArr[2]}></GameRow>            
                <GameRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {wordle} focus={focusedArr[3]}></GameRow>            
                <GameRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {wordle} focus={focusedArr[4]}></GameRow>            
            </div>
        </div>
    );
}

export default Grid;