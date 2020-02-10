import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'

import Person from './Person/Person';


class App extends Component{
  state = {
    persons:[
      {name:"max"},
      {name:"shalin"},
      {name:"kishan"}

    ],
    personBool :true
  }
  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name:newName},
        {name:"this is changed."}
  
      ]
    })
  }
   changeNameHandler = (event) =>{
    this.setState({
      persons:[
        {name:event.target.value},
        {age:"this is changed."}
      ]
    })
  }
  togglePersonHandler = () => {
    const showPersons = this.state.personBool
    this.setState({
      personBool:!showPersons
    })

  }


  render(){
    let personDiv = null
    if (this.state.personBool){
      personDiv = <div>
        <UserInput click ={this.changeNameHandler}></UserInput>
      <UserOutput userName = {this.state.persons[0].name} ></UserOutput>
      <UserOutput userName = {this.state.persons[1].name}></UserOutput>
      <UserOutput userName = {this.state.persons[2].name} ></UserOutput>
      </div>
    }
    return (
      <div className="App">
      <h1>Hello from React</h1>
      <button onClick={this.togglePersonHandler}> CLICK ME  
        {React.version}
      </button>
      {/* <Person name= {this.state.persons[0].name} click = {this.switchNameHandler.bind(this,"dummy name")}> first</Person> */}
      {/* <Person name= {this.state.persons[0].name} changed={this.changeNameHandler} >  second</Person> */}
      <personDiv />
      
      </div>
    );
  }
}

export default App;
