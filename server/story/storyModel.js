var mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
	title:{
	 type:String,
	 required: true	
	},
	auther:{
	  type:String,
	  required: true
	},
	type:{
		type:String,
		required: true
	}
});

var story = mongoose.model('story', storySchema);

module.exports = story; 