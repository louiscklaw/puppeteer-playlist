const express = require('express');

var route_debug = require('./routes/debug.js');

const app = express();

app.use(express.static('public'));

app.use('/debug', route_debug);
app.use('/helloworld', (req, res) =>{
    console.log('helloworld')
    res.send('helloworld')
});

app.listen(8080);
