import React, { useEffect, useState } from "react";
import './index.css'

function FetchData() {

    const [todos, setTodo] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((result) => setTodo(result))
    }, [])

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>User ID</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.userId}</td>
                            <td>{todo.completed ? 'Completed' : 'Pending'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchData

// {todos.map(todo => (
//     <div key={todo.id}>
//         {todo.title} by {todo.userId} - {todo.completed ? 'Completed' : 'Pending'}
//     </div>
// ))}