import React, { useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Graph from './Graph';
import axios from'axios';

//var express = require('express')
//var cors = require('cors')
//var app = express()
 
//app.use(cors())

function App(response){

  const [characters,setCharacters] = useState([]) 

//  var express = require('express')
//  var cors = require('cors')
//  var app = express()

//  app.use(cors())
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/vehicles/').then((response) => {
      console.log(response.data)
      setCharacters(response.data.results)
    })
  }, []) //1 parametro, lo que va a ejecutar, 2 param cuando 
  //useEffect se va a ejecutar despues de que se pinta el html

  return (
    <div className="App">
      <Graph data={characters}/>
    </div>
  );
}

export default App;