import React from 'react';

import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="userOutput">
            <p>{props.children}: {props.name}</p>
        </div>
    )
};

export default userOutput;