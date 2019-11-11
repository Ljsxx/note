import React, { Component } from 'react'
import { Provider } from './context'
import { browserHistory } from './history'
const url = require('url')

class BrowserRouter extends Component {
  constructor () {
    super()
    this.state = {
      pathName: window.location.pathname || '/',
    }
  }

  componentDidMount () {
    this.setPathname()
    // window.location.hash = window.location.hash || '/'
    window.addEventListener('popstate', () => {
      console.log('popstate')
      this.setPathname()
    })
    window.addEventListener('pushState', () => {
      console.log('pushState')
      this.setPathname()
    })
    window.addEventListener('replaceState', () => {
      console.log('replaceState')
      this.setPathname()
    })
  }
  setPathname = () => {
    this.setState({
      pathName: window.location.pathname || '/'
    })
  }

  render () {
    let value = {
      type: 'BrowserRouter',
      history: browserHistory,
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

export default BrowserRouter
