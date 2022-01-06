import { useSelector, useDispatch } from 'react-redux'

interface ICounter {
    counter: number
}

function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state: ICounter) => state.counter)

    function increment() {
        dispatch({ type: 'INCREMENT', payload: 1 })
    }
    function decrement() {
        dispatch({ type: 'DECREMENT', payload: 1 })
    }
    function addBy10() {
        dispatch({ type: 'INCREMENT', payload: 10 })
    }

    return (
        <>
            <h2>Let's Count</h2>
            <hr />
            <h3>{counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy10}>Add by 10</button>
        </>
    )

}

export default Counter