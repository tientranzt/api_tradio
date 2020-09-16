const db = require('../db/db');


exports.testlogin = (req, res, next) => {
  db.query("SELECT * FROM users", function(err, result, field){
    console.log(err)
    if(err == null){
      // res.status(200).json({"users": result })
      res.status(200).json({"server": "hello from server"})
      
    }
    else{
      res.status(404).json({"message": "Error fetching database"})
    }
  })
}

exports.resgisterGet = (req, res, next) => {
  
  console.log(req.body)
  res.json({"server": "hello from server register get"}); 

}

exports.resgisterPost = (req, res) => {

  console.log("register post trigger")
  res.json({"server": "hello from server register post"}); 

}

exports.testHome = (req, res, next) => {

  console.log("home route get trigger")
  res.json({"server": "hello from server home get"}); 

}

exports.testHomePost = (req, res) => {
  console.log("home route post trigger")
  res.json({"server": "hello from server home post"}); 
}

exports.testHomePost1 = (req, res) => {
  console.log("home route post trigger")
  res.json({"server": "hello from server home post"}); 
}

exports.testHomePost2 = (req, res) => {

  console.log("home route post trigger")
  res.json({"server": "hello from server home post"}); 

}

// route test client send user password
exports.testLoginPost = (req, res) => {

  console.log(`User send data: `)
  console.log({});
  res.status(200).json({"server": "hello from server"}); 

}