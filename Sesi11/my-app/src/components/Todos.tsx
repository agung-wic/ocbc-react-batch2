import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ITodos {
    todos: string
}

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(({ todos }: ITodos) => todos)

    useEffect(() => {

    })

}