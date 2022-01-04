import React, { Component } from "react";
import './index.css'

class ClockClass extends Component{
    constructor(props){
        super(props)
        this.state = { date: new Date()}
    }
    
    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return(
            <div className="clock">
                <h1>Hello, world</h1>
                <p>This is Class Component</p>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default ClockClass