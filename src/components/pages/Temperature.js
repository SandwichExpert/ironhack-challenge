import React, {useState} from 'react';


export default function Temperature(){
  const [temperature, setTemperature]=useState('');
  
  function getTemperature(e){
    const value = e.target.value;
    setTemperature(value)
    
  }

  function temperatureStyle(){
    if(!temperature){
      return(
        <p style ={{color: "green"}}>Waiting for the temperature</p>
      )
    }
    else if(temperature <= 0){
      return (
        <p style ={{color: "aliceblue", background:'dodgerblue'}}>It's freezing!</p>
      )
    }
    else if(temperature <= 10){
      return (
        <p style ={{color: "blue"}}>It's cold!</p>
      )
    }
    else if (temperature > 10 && temperature <= 30){
      return (
        <p style ={{color: "black"}}>It's nice!</p>
      )
    }
    else if(temperature > 30){
      return (
        <p style ={{color: "red"}}>It's hot!</p>
      )
    }
  }


  return(
    <div className='container'>
      <h1 >Temperature</h1>
      <input type='number'onChange={getTemperature}/>
      <p>{temperatureStyle()}</p>
      
    </div>
  )
}
