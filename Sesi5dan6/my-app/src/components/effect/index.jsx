import React, { useEffect, useState } from "react";

function EffecExample() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count % 2 === 0) document.title = `You clicked ${count} times`
        // if (count % 2 === 0){
        //     console.log(`You Clicked ${count} times`)
        // }
    }, [count])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} style={{ fontSize: '1em' }}>
                Click me
            </button>
            <button onClick={() => setCount(0)} style={{ fontSize: '1em' }}>
                Reset
            </button>
        </div>
    )
}

export { EffecExample }