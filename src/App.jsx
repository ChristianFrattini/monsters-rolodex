import React, { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component {
  constructor(){  //run BEFORE the return of render
     super();
     
     
    this.state={ //array declaration
      monsters:[]  //initialiase as empty in order to take values from API
      }
    };
    
    componentDidMount(){    //method that is run only once and used to fetch data fro API
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())  //converts the content of the api into a json file
      .then((users)=>this.setState(()=>{
        return{monsters: users}} ,
        ()=>{console.log(this.state);}
      ));   //monters is set to be equal to users (variable)
    }


  
  render(){
  return (
    <div>
      {this.state.monsters.map((monster)=>{ //the map method allows to access the array. 
      //create a temporary object (monster) and use it iterate through the array and generate an h1 on the wp
        return <div key={monster.id}><h1>{monster.name}</h1></div> //a key value is needed for efficiency of the page
                                                        //react will only update the needed component instead of the entire page
      })}
    </div>
  );
  }
}

export default App
