import { createStore } from 'redux'

const initialState = {
    counter: 0
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + payload }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

export default store