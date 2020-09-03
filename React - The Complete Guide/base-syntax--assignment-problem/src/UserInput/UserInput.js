import React from 'react';

// import './UserInput.css';

const userInput = (props) => {
    const inputStyle  = {
        border: "2px solid black",
        margin: "10px auto",
    };

    return (
    <div> 
        <input 
        type="text" 
        style = {inputStyle}
        onChange={props.changed}
        value={props.currentName}/>
    </div>
    )
};

export default userInput;