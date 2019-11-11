import React, { Component } from 'react'
import { Consumer } from './context'

class Switch extends Component {
  render () {
    console.log('Switch render')
    return (
      <Consumer>
        {
          (state) => {
            for (let i = 0; i < this.props.children.length; i++) {
              const path = (this.props.children[i].props && this.props.children[i].props.path) || '/'
              const reg = new RegExp('^' + path)
              if (reg.test(state.location.pathname)) {
                return this.props.children[i]
              }
            }
            return null
          }
        }
      </Consumer>
    )
  }
}

export default Switch
