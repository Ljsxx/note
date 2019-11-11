(function () {
  if (typeof window === undefined) {
    return
  }
  var _wr = function (type) {
    var orig = window.history[type];
    return function () {
      var rv = orig.apply(this, arguments);
      var e = new Event(type);
      e.arguments = arguments;
      window.dispatchEvent(e);
      return rv;
    }
  }
  window.history.pushState = _wr('pushState');
  window.history.replaceState = _wr('replaceState');
})();
