//import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component'
import './App.css'


const App = ()=>{

  const [searchField,setSearchField] =useState(''); //usestate creates an array of 2 elememts [value,setvalue]
  const [monsters,setMonsters]=useState([]);
  const [filteredMonsters,setFilteredMonsters]=useState(monsters);

  console.log(searchField);

  useEffect(()=>{  //useEffect is used to prevent 'fetch' from infinitely being run.useEffect has callback function and array of dependency
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users))
  },[]) //whenever the values in the array changes the callback function is called. 
  //and since the function needs to be called only once, an empty array is passed.

  useEffect(()=>{ //this useEffect is used to only update the monsters and searchField values only when values change
    const newFilteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  },[monsters,searchField])

  const onSearchChange= (event)=>{ //external method
    const searchFieldString=event.target.value.toLocaleLowerCase(); //a constant is storing the name. lower cased
    setSearchField(searchFieldString);
  };





  return(
    <div className='App'>

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters'
       className='monsters-search-box' />


    
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}





export default App
