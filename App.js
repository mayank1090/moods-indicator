
import {useState} from 'react';
import React from 'react';
import Select from 'react-select';


export default function App() {
  
  var moods =[
    {
      value:1,
      label:"Happy",
      bg:'rgb(238, 241, 0)'
    },
    {
      value:2,
      label:"Sad",
      bg:'rgb(19, 0, 164)'
    },
    {
      value:3,
      label:"Excited",
      bg:'rgb(255, 0, 66)'
    },
    {
      value:4,
      label:"Sleepy",
      bg:'rgb(35, 177, 0)'
    }

  ]

  const [bgcolor,setbgcolor]=useState(moods.bg)

  const handlechange=(e)=>{

    console.log(e.bg)
    
    setbgcolor(e.bg)

    console.log(bgcolor)

  }


  
  return (
    
    <div id="main">
      <Select options={moods} onChange= {handlechange}
      >
      </Select>
      <div id="mood-indicator"  style={{height:"200px",backgroundColor:bgcolor}}>
      </div>
    </div>
  )
}
  

