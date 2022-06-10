import React from "react";
import './GameTile.css'

const GameTile = (props) => {

    return (
        <React.Fragment>
            <span className="game-tile">{props.letter}</span>
        </React.Fragment>
    );
}

export default GameTile;