import React, { Component } from 'react'
import { Consumer } from './context'

class Redirect extends Component {
  render () {
    console.log('Redirect render')
    return (
      <Consumer>
        {
          (state) => {
            state.history.push(this.props.to)
            return null
          }
        }
      </Consumer>
    )
  }
}

export default Redirect
