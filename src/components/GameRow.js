import React, {useState} from 'react';
import GridTile from './GridTile'
import alphabetCheck from '../utils/utils.js';
import './GameRow.css'

function GameRow(props) {
    const [letterArr, setLetterArr] = useState([]);


    const getKeyboardInput = (e) => {
        let letter = e.key;
        if (letter  === 'Backspace') {
            setLetterArr(letterArr.slice(0, -1));
        } else if(letterArr.length < 5 && alphabetCheck(letter) && letter != "Tab") {
            setLetterArr(letterArr.concat(letter.toUpperCase()));
        }
            console.log(letterArr)
    }

    return (
        <React.Fragment>
            <div className="row-container" onKeyDown={getKeyboardInput} tabIndex="0">
                <GridTile letter={letterArr[0]}></GridTile>
                <GridTile letter={letterArr[1]}></GridTile>
                <GridTile letter={letterArr[2]}></GridTile>
                <GridTile letter={letterArr[3]}></GridTile>
                <GridTile letter={letterArr[4]}></GridTile>
            </div>
        </React.Fragment>
    );

}


export default GameRow;
