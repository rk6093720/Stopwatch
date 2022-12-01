import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// import "../App.css"
const Stopwatch = () => {
  const [time, setTime]= useState(0);
  const [timer, setTimer]= useState(false);

  useEffect(()=>{
    let interval = null;
    if(timer){
      interval = setInterval(()=>{
        setTime((prev)=> prev + 10);
      },10);
    }
    else if(!timer){
      clearInterval(interval);
    }
    return ()=>{
      clearInterval(interval)
    }
  },[timer])
  return (
    <div className='timers'> 
       <h1>Stopwatch</h1> 
       <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10)%100)).slice(-2)}</span>
       </div>
        <div id="buttons">
          {!timer && time ===0 && (
            <button onClick={() => setTimer(true) }>Start</button>
          )}
          {timer && <button onClick={()=> setTimer(false)}>Stop</button>}
          {!timer && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
          )}
          { !timer && time >0 && (
              <button onClick={()=> setTimer(true)}>Resume</button>
          )}
        </div>
    </div>
  )
}

export default Stopwatch