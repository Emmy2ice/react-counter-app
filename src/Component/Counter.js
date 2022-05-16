import React from "react"
import { useState } from "react"

const Counter = () => {
    const [value, setValue] = useState(0);
    const [count, stopCount] = useState(0);
    
    function counting (){
        if (count) {
            clearInterval(count);
            stopCount(0);
            return;
        }
        
        const incrementValue = setInterval(() => {
                setValue(preValue => preValue + 1);
            }, 1000);
            stopCount(incrementValue);
        
    }

        const reset = () =>{
            setValue(0);
        }
        

    return (
        <div style = {{height: '300vh'}}>
            <h1>{value}</h1>
            <button onClick = {counting}>Count</button>
            <button onClick={reset}>Reset</button>
        </div>
        
    )
};

export default Counter;