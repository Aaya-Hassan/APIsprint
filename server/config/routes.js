//you need to require some files here
var userController = require('../user/userController.js');
var storyController = require('../story/storyController.js');

module.exports = function (app, express) {

//=============================================================================
/*								user route									 */
//=============================================================================
	app.post('/user/signup', userController.signup);
	app.post('/user/signin', userController.signin);
    app.get('/user/getAllUsers', userController.getAllUsers);
	//here you have to add two more routes
	
//=============================================================================
/*								story route									 */
//=============================================================================
	app.post('/story/insertStory', storyController.insertStory);
	app.get('/story/getAllStories', storyController.getAllStories);
	app.get('/story/getStoryById/:id', storyController.getStoryById);
	//here you have to add two more routes
};

