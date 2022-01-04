import React, { useState } from "react";

interface ICount {
    initialCount: number 
}

function Counter({initialCount}: ICount): JSX.Element{
    const [count, setCount] = useState(initialCount)
    return(
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount+1)}>+</button>
        </>
    )
}

export default Counter