// <script width="750" max="750" src="viewport.js">
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
  var viewport = document.getElementsByName('viewport')[0]
  if (!viewport) {
    viewport = document.createElement('meta')
    viewport.name = 'viewport'
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(viewport)
  }

  // get deviceWidth
  viewport.content = 'width=device-width'
  var deviceWidth = document.documentElement.clientWidth

  // scale
  if (deviceWidth > maxWidth) deviceWidth = maxWidth
  var scale = deviceWidth / designWidth
  viewport.content = 'width=@designWidth,initial-scale=@scale,maximum-scale=@scale,user-scalable=0'
    .replace(/@designWidth/g, designWidth)
    .replace(/@scale/g, scale)
  return function () {
    setTimeout(f, 300)
  }
}())
