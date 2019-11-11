const url = require('url')
// hash
function hashPush (path) {
  if (typeof path === 'string') {
    window.location.hash = path.indexOf('/') === 0 ? path : ('/' + path)
    return
  }
  if (typeof path === 'object') {
    let obj = {
      pathname: path.path || '/',
      query: path.query || {}
    }
    const formatUrl = url.format(obj)
    window.location.hash = formatUrl.indexOf('/') === 0 ? formatUrl : ('/' + formatUrl)
  }
}

function hashReplace (path) {
  if (typeof path === 'string') {
    window.location.replace(path.indexOf('/') === 0 ? ('/#' + path) : ('/#/' + path))
    return
  }
  if (typeof path === 'object') {
    let obj = {
      pathname: path.path || '/',
      query: path.query || {}
    }
    const formatUrl = url.format(obj)
    window.location.replace(formatUrl.indexOf('/') === 0 ? ('/#' + formatUrl) : ('/#/' + formatUrl))
  }
}

// browser
function browserPush (path) {
  if (typeof path === 'string') {
    window.history.pushState(null, '', path)
    return
  }
  if (typeof path === 'object') {
    let obj = {
      pathname: path.path || '/',
      query: path.query || {}
    }
    const formatUrl = url.format(obj)
    window.history.pushState(null, '', formatUrl)
  }
}
function browserReplace (path) {
  if (typeof path === 'string') {
    window.history.replaceState(null, '', path)
    return
  }
  if (typeof path === 'object') {
    let obj = {
      pathname: path.path || '/',
      query: path.query || {}
    }
    const formatUrl = url.format(obj)
    window.history.replaceState(null, '', formatUrl)
  }
}


function go (num) {
  window.history.go(num)
}
function back () {
  go(-1)
}

// hash
export const hashHistory = {
  push: hashPush,
  replace: hashReplace,
  go: go,
  back: back
}
// browser
export const browserHistory = {
  push: browserPush,
  replace: browserReplace,
  go: go,
  back: back
}
