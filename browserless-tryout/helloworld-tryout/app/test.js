const express = require('express');

var route_debug = require('./routes/debug.js');

// var route_jobsdb = require('./routes/jobsdb.js');
// var route_carousell = require('./routes/carousell.js');
// var carousell_helloworld = require('./routes/carousell/helloworld');

const app = express();

app.use(express.static('public'));

app.use('/debug', route_debug);
// app.use('/jobsdb', route_jobsdb);

// app.use('/carousell/helloworld', carousell_helloworld);
// app.use('/carousell', route_carousell);

require('./routes/jobsdb/helloworld')(app);

require('./routes/jobsdb/get_jobsdb')(app);
require('./routes/jobsdb/get_jobsdb_screenshot')(app);
require('./routes/jobsdb/get_job')(app);


require('./routes/carousell/helloworld')(app);
require('./routes/carousell/capture_carousell')(app);

require('./routes/carousell/search_keyword/check_position')(app);
require('./routes/carousell/search_keyword/json_content')(app);


app.listen(8080);
