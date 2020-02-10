import React from 'react';



const userInput = (props) => {
    return(
        <div>
            <input type="text" onChange={props.click} />
        </div>
    )
}

export default userInput;