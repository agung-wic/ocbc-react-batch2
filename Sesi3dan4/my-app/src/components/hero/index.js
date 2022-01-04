import React, {Component} from "react";
import PropTypes from "prop-types"

// class HeroName extends Component{
//     render(){
//         return <h3>{this.props.name}</h3>
//     }
// }

// HeroName.propTypes = {
//     name: ProtoTypes.string
// }

class Hero extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "Agung Wicaksono"
        }
    }

    render() {
        // return <HeroName name={this.state.name} />
        return (
            <>
                <h1>{this.props.name}</h1>
                <img src={this.props.logo} alt="Logo" width="300px"/>
            </>
        )
    }
}

Hero.propTypes  = {
    name: PropTypes.string,
    logo: PropTypes.string
}

export default Hero