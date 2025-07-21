import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing , setIsEditing] = useState(false)
    function handelEditClick(){
//         setIsEditing(isEditing ? false : true)
        setIsEditing((editing) => !editing)
        }

    let playerName = <span className="player-name">{name}</span>
    // btnCaption = 'Save'

    if(isEditing){
        playerName = <input type="text" required value={name} />
        // btnCaption = 'Edit'
        }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handelEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}