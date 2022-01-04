import React, { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState(0)

    useEffect(() => {
        fetch('/time')
            .then(response => response.json())
            .then(data => {
                setTime(data.time)
            })
    }, [])

    const timeFormat = (time) => {
        const date = new Date(time * 1000)
        const timeStr = date.toTimeString().split(' ')[0]

        return timeStr
    }

    return (
        <p>The Current Time is {timeFormat(time)}.</p>
    )
}

export default Time