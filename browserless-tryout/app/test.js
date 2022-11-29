const express = require('express');

var route_debug = require('./routes/debug.js');
var route_jobsdb = require('./routes/jobsdb.js');
var route_carousell = require('./routes/carousell.js');

const app = express();

app.use(express.static('public'));

app.use('/debug', route_debug);
app.use('/jobsdb', route_jobsdb);
app.use('/carousell', route_carousell);

app.listen(8080);
