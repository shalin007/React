import React, { Component } from "react"
import './Person.css';


const person = ( props ) =>{
return (
<div className="Person"> <p onClick={props.click}> This is from other {props.name} and i am { props.children}</p>
        <input  type="text" onChange={props.changed} value={props.name} />
        </div>)
}

export default person;
