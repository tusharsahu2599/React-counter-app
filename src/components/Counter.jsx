import React from 'react';
import { useState} from "react"

function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = (value) =>{
        setCounter(counter+value);
    }


    const decrementCounter = (value) =>{
        if(counter >= 1)
            setCounter(counter-value);
    }


    const clear = (value) =>{
        setCounter(counter*value);
    }
  return (
    <div>
        <h1>Counter : {counter}</h1>

            <button onClick={ () => 
            incrementCounter(1) }>
                Add1
            </button>

            <button onClick={ () =>
            decrementCounter(1)}>
                min 1
            </button>

            <button onClick={ () =>
            clear(0)}
            >
                Clear 
            </button>
        </div>
  )
}

export default Counter