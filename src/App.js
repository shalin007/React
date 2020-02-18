import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'
import ValidationComponent from './ValidationComponent/ValidationComponent'

import Person from './Person/Person';
import userOutput from './UserOutput/UserOutput';
import Char from './CharComponent/Char'


class App extends Component{
  state ={
    userInput : ''
  }
  changeHandler = (event) =>{
    this.setState({
      userInput : event.target.value
    })
  }

  deleteHandler = (index) =>{
    const text = this.state.userInput.split('')
    const updated_text = text.slice(index,1).join('')
    this.setState({
      userInput:updated_text
    })
    }
  
  render(){
    const charList  = this.state.userInput.split('').map((ch,index) => {
      return <Char ch={ch} key={index} click = {()=> this.deleteHandler(index)}></Char>
    })
    return (
      <div className="App">
      <h1>Hello from React</h1>
      <button >{React.version}</button>
      <input  onChange={this.changeHandler} value={this.state.userInput}></input>
      <p>{this.state.userInput}</p>
      <ValidationComponent name = {this.state.userInput.length}></ValidationComponent>
      {charList}
      </div>
    );
  }
}

export default App;
