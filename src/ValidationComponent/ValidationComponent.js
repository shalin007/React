import React from 'react';



const validation = (props) => { 
    let comp = <div>
                <p>LEGNTH IS {props.name}</p>
                </div>
    if (props.name > 5) {
        comp = <div>
                <p>LEGNTH IS TOO BIG</p>
                </div>
    }
    return(
        comp
    )
}

export default validation;