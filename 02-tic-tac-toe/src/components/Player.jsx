import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function handelEditClick() {
        //         setIsEditing(isEditing ? false : true)
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName)
        }

    }
    function handelChange(event) {
        console.log(event)
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // btnCaption = 'Save'

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handelChange} />
        // btnCaption = 'Edit'
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handelEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}