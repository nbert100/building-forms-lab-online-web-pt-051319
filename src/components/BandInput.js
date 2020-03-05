// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Band Input</label>
        <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}></input>
        <button type="submit">Submit</button>  
        </form>
        
      </div>
    )
  }
}

export default BandInput
