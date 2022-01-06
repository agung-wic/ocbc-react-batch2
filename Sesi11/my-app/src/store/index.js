import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

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
const middleware = applyMiddleware(thunk, logger)
const store = createStore(
    reducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(() => console.log(store.getState()))

export default store