// <script width="750" max="750" src="zoom.js">
addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function f() {
  var designWidth = 750, maxWidth
  var scripts = document.scripts
  for (var i = 0; i < scripts.length; i++) {
    var width = scripts[i].getAttribute('width')
    var max = scripts[i].getAttribute('max')
    if (width) designWidth = width
    if (max) maxWidth = max
  }
  if (!maxWidth) maxWidth = designWidth
  var html = document.documentElement
  var deviceWidth = html.clientWidth
  if (deviceWidth > maxWidth) deviceWidth = maxWidth
  var scale = deviceWidth / designWidth
  html.style.zoom = scale
  return function () {
    setTimeout(f, 300)
  }
}())