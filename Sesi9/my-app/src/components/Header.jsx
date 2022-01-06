import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "FSD OCBC Batch ke-2!!!!",
      counter: 0
    }
  }

  changeName = (newName) => {
    this.setState({
      name: this.state.name + newName
    })
  }

  changeCount = type => {
    const oldCounter = this.state.counter

    // ternary operator -> periksa kondisi
    // format: [kondisi] ? [hasil jika true] : [hasil jika false]

    switch(type) {
      case 'increment':
        this.setState({
          // format: [kondisi]       ? [hasil jika true] : [hasil jika false]
          counter:   oldCounter > 10 ?                 0 : oldCounter + 1
        })
        break
      case 'decrement':
        this.setState({
          counter: oldCounter + 1
        })
        break
      default:
    }
  }

  render() {
    // <> -> React Fragment: tidak perlu adanya tag <div> baru

    // penulisan attribute pada JS(X):
    // "" -> datanya statis (ala kadarnya)
    // {} -> datanya dinamis
    return (
      <div>
        <h1>Batch {this.props.batch}</h1>

        <img src={this.props.logo} alt="logo" />

        <h3>Halo kelas {this.state.name}</h3>

        <button
          onClick={() => this.changeName('FSD OCBC Batch ke-2 di React!!!!!!!!!!!!!')}
        >
          Ganti nama, gan!
        </button>

        <hr />

        <h4>Let's count!</h4>

        <h5>{ this.state.counter }</h5>

        <button onClick={() => this.changeCount('increment')}>Tambahkan dengan 1</button>
        <button>Kurangkan dengan 1</button>
      </div>
    )
  }
}

Header.propTypes = {
  batch: PropTypes.string,
  logo: PropTypes.string
}

export default Header
