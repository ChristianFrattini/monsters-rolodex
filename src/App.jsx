import React, { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component {
  constructor(){  //run BEFORE the return of render
     super();
     
     
    this.state={ //array declaration
      monsters:[
        {
          name:'linda'
        },
        {
          name: 'frank'
        },
        {
          name: 'jackie'
        },
        {
          name:'harry spotter'
        }
      ]
    }
    
  }
  render(){
  return (
    <div>
      {this.state.monsters.map((monster)=>{ //the map method allows to access the array. 
      //create a temporary object (monster) and use it iterate through the array and generate an h1 on the wp
        return <h1>{monster.name}</h1>
      })}
    </div>
  );
  }
}

export default App
