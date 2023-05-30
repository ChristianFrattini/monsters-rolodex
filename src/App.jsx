import React, { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component {
  constructor(){  //run BEFORE the return of render
     super(); 

     this.state={   //used for referencing the state of the variable 'name' and access it in the js
      name:{firstName:'Chris', lastName: 'Frattini'},
      company: 'Frattini LTD'
     }
  }

  render(){
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite - React</h1>
      <p>Hello {this.state.name.firstName} {this.state.name.lastName}, 
      I work at {this.state.company}</p>  
      <button 
      onClick={()=>{
        this.setState(()=>{
          return{
            name:{firstName:'Harry', lastName:'Spotter'} //returns the name variable.
          };
        }, ()=>{console.log(this.state)} // the callback function is run only after the state change happened
        );  
      }}>
         Change Name
         </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
  }
}

export default App
