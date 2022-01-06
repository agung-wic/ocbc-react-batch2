const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "Increment":
            return { counter: state.counter + 1 }
        case "Decrement":
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

var store = Redux.createStore(counter)

var el = document.getElementById('counter')
const render = () => {
    el.innerHTML = store.getState().counter.toString()
}

render()
store.subscribe(render)

var incEl = document.getElementById('increment')
var decEl = document.getElementById('decrement')

incEl.addEventListener('click', () => {
    store.dispatch({type: 'Increment'})
})
decEl.addEventListener('click', () => {
    store.dispatch({type: 'Decrement'})
})