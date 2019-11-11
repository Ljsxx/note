import React, { Component } from 'react'
import { Provider } from './context'
import { hashHistory } from './history'
const url = require('url')

class HashRouter extends Component {
  constructor () {
    super()
    this.state = {
      pathName: window.location.hash.slice(1) || '/',
    }
  }

  componentDidMount () {
    // 如果没用hash
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange', () => {
      this.setState({
        pathName: window.location.hash.slice(1) || '/'
      })
    })
    this.setState({
      pathName: window.location.hash.slice(1) || '/'
    })
  }

  render () {
    let value = {
      type: 'HashRouter',
      history: hashHistory,
      location: Object.assign({
        pathname: '/'
      }, url.parse(this.state.pathName, true))
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export default HashRouter
