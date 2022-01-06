import { useEffect, useState } from 'react';

function Users({ history }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUsers(result))
    }, [])

    return (
        <>
            {/* NOTE: <button> memiliki implicit role 'button' */}
            <button onClick={() => history.push('/')}>Back To Home</button>

            {
                users.map(user => (
                    <span key={user.id}>{user.name}</span>
                ))
            }
        </>
    )
}

export default Users
