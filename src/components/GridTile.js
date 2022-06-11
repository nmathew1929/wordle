import React, {useEffect, useState} from "react";
import './GridTile.css'

const GridTile = (props) => {
    // console.log("FROM THE TILE: " + props.letter);

    return (
        <React.Fragment>
            <div className={props.letter ? "tile-occupied":"tile-empty"}>{props.letter}</div>
        </React.Fragment>
    );
}

export default GridTile;