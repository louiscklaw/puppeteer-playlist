
var Xray = require('x-ray')
var x = Xray()

x('https://www.example.com/', 'body', [
  {
    title: 'h1'
  }
])(function(err, title) {
  console.log(title)
})
