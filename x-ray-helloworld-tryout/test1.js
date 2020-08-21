const fs = require('fs')
var Xray = require('x-ray')
var x = Xray()

var html = '<body><h2>Pear</h2></body>'
x(html, 'body', 'h2')(function(err, header) {
  console.log(`header`) // => Pear
})

x(html, 'body', 'h2')(function(err, header) {
  fs.writeFileSync('./test.json',header,{encoding:'utf-8'})
})
