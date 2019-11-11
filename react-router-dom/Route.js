import React, { Component } from 'react'
import { Consumer } from './context'

class Route extends Component {
  render () {
    console.log('Route render')
    return (
      <Consumer>
        {
          (state) => {
            let { path, component: View } = this.props
            if (path === state.location.pathname) {
              return <View {...state}></View>
            }
            return null
          }
        }
      </Consumer>
    )
  }
}

export default Route
