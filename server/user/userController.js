//require the model here
var User = require('./userModel.js');

module.exports ={
	
//you have to use the movie model to make a new database entry 
	
//you need to use params.id to find a movie from your database
signup : function(req,res){
     User.findOne({username:req.body.username},function(err,user){ 
      if(user){
          res.json('user is already exist')
      }else{
        var newUser = new User ({
          username : req.body.username,
          password : req.body.password
        });
        newUser.save(function(err, newUser){
          if(err){
            res.status(500).send(err);
          }else{
            res.json(newUser)
          };
        });       
      }
     })
  },
	signin : function(req,res){
     User.findOne({username:req.body.username},function(err,user){ 
     	if (!user) {
     		res.json('user dosenot exist');
     	}else{
       if(user.password === req.body.password){
         res.json('Log in')
       }else{
         res.json('your password is not correct')
       }
     	}
     })
    },
  getAllUsers : function(req,res){
  	User.find({},function(err,data){
      if(err){
      	res.json(err)
      }else{
      	res.json(data)
      }
  	})
  }
}