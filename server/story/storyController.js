//require files here
var Stories = require('./storyModel.js');
module.exports ={
	//you have to use the books model to make a new database entry 
	//you need to use params.id to find a books from your database
	insertStory: function(req,res){
      Stories.create(req.body,function(err,story){
      if(story){
      	res.json(story)
      }else{
      	console.log('err')
      }
 	})
	},
	getAllStories : function(req,res){
		Stories.find({},function(err,data){
			if(err){
				res.json(err)
			}else{
				res.json(data)
			}
		})
	},
	getStoryById : function(req,res){
	 Stories.findOne({_id:req.params.id},function(err,data){
	 	if(err){
          console.log(err)
	 	}else{
          res.json(data)
	 	}
	 })
    }
}
