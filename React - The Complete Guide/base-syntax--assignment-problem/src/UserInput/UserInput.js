import React from 'react';

import './UserInput.css';

const userInput = ( props ) => {
    return (
        <div className="userInput">
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default userInput;