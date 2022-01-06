import { useEffect, useState } from "react"
import Card from "../components/Card"

interface ITodo {
    id: number,
    title: string,
    userId: number,
    completed: boolean
}

function Todos() {
    const [url] = useState('https://jsonplaceholder.typicode.com/todos')
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState()

    // * Fetch Data
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setTodos(result))
    }, [])

    // * function untuk mendapatkan data spesifik
    function getTodo(id: ITodo) {
        fetch(url + `/${id}`)
            .then(response => response.json())
            .then(result => setTodo(result))
    }

    return (
        <>
            {
                // todo && (<div>...</div>)
                // * sama seperti ->> todo ? (<div>...</div>) : null

                // todo || (<div>...</div>)
                // * sama seperti ->> todo ? null : (<div>...</div>) --> ||

                // * -> true && true  -> true
                // * -> true && false -> false

                // ? -> true || true   -> true
                // ? -> true || false  -> true
                // ? -> false || true  -> true
                // ? -> false || false -> false
            }

            {
                todo && ((todo: ITodo) =>(
                    <div>
                        {todo.id} - {todo.userId} - {todo.completed ? 'Completed' : 'Pending'}
                        <button onClick={() => setTodo}>Go back</button>
                    </div>
                ))
            }

            {
                !todo && todos.map((todo: ITodo) => (
                    // <div key={ todo.id }>
                    //   <button onClick={() => getTodo(todo.id)}>
                    //     { todo.title } by { todo.userId } - { todo.completed ? 'Completed' : 'Pending' }
                    //   </button>
                    // </div>
                    <Card
                        key={todo.id}
                        title={todo.title}
                        userId={todo.userId}
                        completed={todo.completed}
                    />
                ))
            }
        </>
    )
}

export default Todos