import React, { Component } from 'react'
import { Consumer } from './context'

class Link extends Component {
  render () {
    console.log('Link render')
    return (
      <Consumer>
        {
          (state) => {
            let to = this.props.to || '/'
            to = to.indexOf('/') === 0 ? to : '/' + to
            return <a {...this.props} href={state.type === 'BrowserRouter' ? to : '/#' + to} onClick={(e) => {
              if (e && e.preventDefault) {
                e.preventDefault()
              } else {
                window.event.returnValue = false
              }
              state.history.push(to)
            }}>{this.props.children}</a>
          }
        }
      </Consumer>
    )
  }
}

export default Link
