import { useState } from "react"
import { useParams } from "react-router-dom"

function NameChange() {

    interface IParams {
        names: string
    }

    const params: IParams = useParams()

    const [name, setName] = useState(params.names || 'Budi')
    const [anotherName, setAnotherName] = useState('Wicaksono')

    function ChangeName() {
        const oldName = name
        setName(anotherName)
        setAnotherName(oldName)

    }

    return (
        <div style={{ width: '100px', margin: '50px auto' }}>
            <p>My Name: {name}</p>
            <button onClick={ChangeName}>Change Name</button>
        </div>
    )

}

export default NameChange