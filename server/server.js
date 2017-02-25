//require express and mongoose here
var express = require('express')
var mongoose = require('mongoose')
//require your middleware and routes here
var app = express();
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

//=============================================================================
/*									Database								 */
//=============================================================================
	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected
 mongoose.connect('mongodb://localhost/apisprint');
//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
	console.log('running on port',app.get('port'))
});



module.exports= app;
// to export our app for testing 