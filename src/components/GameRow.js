import React from 'react';
import GameTile from './GameTile'

function GameRow() {
    return (
        <React.Fragment>
            <div>
            <GameTile letter="A"></GameTile>
            <GameTile letter="B"></GameTile>
            <GameTile letter="C"></GameTile>
            <GameTile letter="D"></GameTile>
            <GameTile letter="E"></GameTile>
            </div>
        </React.Fragment>
    );

}

export default GameRow;
