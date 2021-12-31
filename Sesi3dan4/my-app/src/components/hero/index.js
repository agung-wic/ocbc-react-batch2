import React from "react";
import ProtoTypes from "prop-types"

class HeroName extends React.Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}

HeroName.propTypes = {
    name: ProtoTypes.string
}

export default class Hero extends React.Component{
    constructor() {
        super()
        this.state = {
            name: "Agung Wicaksono"
        }
    }

    render() {
        return <HeroName name={this.state.name} />
    }
}