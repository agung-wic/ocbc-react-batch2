export const incrementCounter = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'INCREMENT', payload: 1 })
        }, 2000)
    }
}