import { useState } from 'react'
import GridRow from './GridRow'
import './Grid.css'
import { GlobalState, useGlobalState } from '../GlobalContext';

function Grid() {
    const [focusedArr, setFocusedArr] = useState([true, false, false, false, false, false])
    const [globalState] = useGlobalState();
    console.log(globalState) //wordle word
    return (
        <div id="board-container">
            <div id="board">
                <GridRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {globalState} focus={focusedArr[0]}></GridRow>            
                <GridRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {globalState} focus={focusedArr[1]}></GridRow>            
                <GridRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {globalState} focus={focusedArr[2]}></GridRow>            
                <GridRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {globalState} focus={focusedArr[3]}></GridRow>            
                <GridRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {globalState} focus={focusedArr[4]}></GridRow>            
                <GridRow focusedArr = {focusedArr} onChange = {value => setFocusedArr(value)} wordle = {globalState} focus={focusedArr[5]}></GridRow>            
            </div>
        </div>
    );
}

export default Grid;