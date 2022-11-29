const express = require('express');

var route_debug = require('./routes/debug.js');
var route_jobsdb = require('./routes/jobsdb.js');
var route_carousell = require('./routes/carousell.js');

var carousell_helloworld = require('./routes/carousell/helloworld');

const app = express();

app.use(express.static('public'));

app.use('/debug', route_debug);
app.use('/jobsdb', route_jobsdb);

// app.use('/carousell/helloworld', carousell_helloworld);
// app.use('/carousell', route_carousell);
require('./routes/carousell/helloworld')(app);
require('./routes/carousell/capture_carousell')(app);


app.listen(8080);
