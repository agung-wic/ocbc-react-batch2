import React, { useEffect, useState } from "react";
import './index.css'

function ClockFunction() {
    const [date, setDate] = useState(new Date())

    function tick() {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(interval)
        }
    },[])


    return (
        <div className="clock">
            <h1>Hello, world</h1>
            <p>This is Functional Component</p>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    )
}

export default ClockFunction