import React from "react";
import './GridTile.css'
import { applyTileStyle } from "../utils/utils";

const GridTile = (props) => {
    // console.log("FROM THE TILE: " + props.letter);

    return (
        <React.Fragment>
            <div className="tile-item">
                <div className={applyTileStyle(props.wordle, props.letter, props.index)}>{props.letter}</div>
            </div>
        </React.Fragment>
    );
}

export default GridTile;