// <script width="750" rem="100" src="rem.js">
addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function f() {
  var designWidth = 750
  var rem = 100
  var scripts = document.scripts
  for (var i = 0; i < scripts.length; i++) {
    var width = scripts[i].getAttribute('width')
    var px = scripts[i].getAttribute('rem')
    if (width) designWidth = width
    if (px) rem = px
  }
  var html = document.documentElement
  var deviceWidth = html.clientWidth
  if (deviceWidth > designWidth) deviceWidth = designWidth
  html.style.fontSize = deviceWidth * rem / designWidth + 'px'
  return function () {
    setTimeout(function () { f() }, 300)
  }
}())