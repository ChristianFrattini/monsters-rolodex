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
          name:'linda',
          id:'dsjhbfjksd'
        },
        {
          name: 'frank',
          id:'kafjdf'
        },
        {
          name: 'jackie',
          id:'fahhfaei'
        },
        {
          name:'harry spotter',
          id:'kdabkvcb'
        }
      ]
    }
    
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
