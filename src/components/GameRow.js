import React, {useState} from 'react';
import GridTile from './GridTile'
import {letterCheck} from '../utils/utils.js';
import './GameRow.css'

function GameRow(props) {
    const [letterArr, setLetterArr] = useState([]);

    const checkIfFull = () => {
        if(letterArr.length < 5) {
            console.log("Not filled yet.")
        } else {
            console.log("Filled.")
            console.log(props.wordle)
            if(props.wordle === letterArr.join("")) {
                console.log("word found");
            } else {
                let arr = props.focusedArr;
                arr = arr.slice(0, -1);  
                arr.unshift(false);
                console.log(arr);
                props.onChange(arr)
            }

        }
    }

    const getKeyboardInput = (e) => {
        let input = e.key;
         console.log(input)
        if (input === 'Backspace') {
            setLetterArr(letterArr.slice(0, -1));
        } else if(letterArr.length < 5 && letterCheck(input)) {
            setLetterArr(letterArr.concat(input.toUpperCase()));
        } else if (input === 'Enter') {
            checkIfFull();
        }
    }

    return (
        <React.Fragment>
            <div className="row-container" onKeyDown={props.focus ? getKeyboardInput: undefined} tabIndex="0">
                <GridTile  wordle={props.wordle} letter={letterArr[0]} index={0}></GridTile>
                <GridTile  wordle={props.wordle} letter={letterArr[1]} index={1}></GridTile>
                <GridTile  wordle={props.wordle} letter={letterArr[2]} index={2}></GridTile>
                <GridTile  wordle={props.wordle} letter={letterArr[3]} index={3}></GridTile>
                <GridTile  wordle={props.wordle} letter={letterArr[4]} index={4}></GridTile>
            </div>
        </React.Fragment>
    );

}


export default GameRow;
