import React from "react";

export default class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    // getUserName(){
    //     return this.state.username
    // }

    // setUsername = () => {
    //     this.setState({
    //         username: 'User02'
    //     })
    // }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <br />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

// export default Users