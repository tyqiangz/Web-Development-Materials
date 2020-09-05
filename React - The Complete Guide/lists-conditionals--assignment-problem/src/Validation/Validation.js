import React from 'react'

const validation = (props) => {
    const OPTIMAL_LENGTH = 5
    let outputText = "";

    if (props.length < OPTIMAL_LENGTH) {
        outputText = "Text too short"
    }
    else {
        outputText = "Text long enough"
    }

    return (
        <div className="Validation">
            {outputText}
        </div>
    )
}

export default validation