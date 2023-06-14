import React, { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component'
import './App.css'



class App extends Component {
  constructor(){  //run BEFORE the return of render
     super();
     
     
    this.state={ //array declaration
      monsters:[],  //initialiase as empty in order to take values from API
      searchField:'',  //intialise a search field variable (it is made accessible everywhere in the code)
      }

      //console.log('constructor-runs first')
    };
    
    componentDidMount(){    //method that is run only once and used to fetch data fro API
      //console.log('componentDidMount-runs third')
      fetch('https://jsonplaceholder.typicode.com/users') // fetches the content of an api
      .then((response)=>response.json())  //converts the content of the api into a json file
      .then((users)=>this.setState(()=>{
        return{monsters: users}} ,
        ()=>{console.log(this.state);}
      ));   //monsters is set to be equal to users (variable)
    }

    onSearchChange = (event)=>{ //external method
      const searchField=event.target.value.toLocaleLowerCase(); //a constant is storing the name. lower cased
      this.setState(()=>{
        return {searchField}; //return the filtered name into the variable search field
      });
    }

  
  render(){
  //console.log('render-runs second')

  const {monsters, searchField}= this.state; //allows to make the code more readeable by coder
  const {onSearchChange}=this; //allows to make the code more readeable by coder

  const filteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  }); // constant containing the filtered mosters. (they're gonna be saved into the monster array


  return (
    <div>

      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box' />


      {/*filteredMonsters.map((monster)=>{ //the map method allows to access the array. 
      //create a temporary object (monster) and use it iterate through the array and generate an h1 on the wp
        return <div key={monster.id}><h1>{monster.name}</h1></div> //a key value is needed for efficiency of the page
                                                        //react will only update the needed component instead of the entire page
      })
      */}
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App
