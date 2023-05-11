import { useState , useEffect } from "react";

function CounterFc (){
    const[initialCount , updateCount] = useState(0);

    useEffect( ()=>{
        document.title = `you clicked ${initialCount} times`
    })

    return(

        <>
            <h1>counterFc : {initialCount}</h1>
            <button onClick={ ()=> {
                updateCount(initialCount +1)
            }}>+</button>
            <button onClick={ ()=> {
                updateCount(initialCount -1)
            }}>-</button>
            </>

    )

}

export default CounterFc;