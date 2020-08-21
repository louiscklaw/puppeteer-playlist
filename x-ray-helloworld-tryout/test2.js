const fs = require('fs')
var Xray = require('x-ray')
var x = Xray()

var html = `
<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>


</body>
`

x(html, 'h1')
  .then(res => console.log(res))