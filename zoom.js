// <script width="750" src="zoom.js">
addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function f() {
  var designWidth = 750
  var scripts = document.scripts
  for (var i = 0; i < scripts.length; i++) {
    var width = scripts[i].getAttribute('width')
    if (width) designWidth = width
  }
  var html = document.documentElement
  var deviceWidth = html.clientWidth
  var scale = deviceWidth / designWidth
  html.style.zoom = scale
  return function () {
    setTimeout(function () { f() }, 300)
  }
}())