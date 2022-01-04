import React, { useEffect, useState } from 'react'
import './index.css'

interface IData {
    id: number,
    date: Date,
    title: string,
    body: string
}

function Content() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('/articles')
            .then(response => response.json())
            .then(result => setDatas(result))
            .catch((error) => {
                console.log(error)
            } )
    }, [])

    return (
        <>
            {datas.map((data: IData) => (
                <div key={data.id} className='card'>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                    <h5>{new Date(data.date).toLocaleString()}</h5>
                </div>
            ))}
        </>

    )
}

export default Content