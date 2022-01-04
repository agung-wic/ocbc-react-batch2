import React, { useEffect, useState } from "react";

function Hello (){
    const [placeholder, setPlaceholder] = useState('Hi')

    useEffect(()=>{
        fetch('/hello')
        .then(response => response.json())
        .then(data => {
            setPlaceholder(data.result)
        })
    }, [])

    return(
        <p>Flask Says {placeholder}</p>
    )
}

export default Hello