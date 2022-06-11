import GameRow from './GameRow'
import './Grid.css'

function Grid() {
    return (
        <div id="board-container">
            <div id="row">
                <GameRow focused={true}></GameRow>            
                <GameRow></GameRow>            
                <GameRow></GameRow>            
                <GameRow></GameRow>            
                <GameRow></GameRow>            
            </div>
        </div>
    );
}

export default Grid;