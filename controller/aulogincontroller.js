
exports.testlogin = (req, res, next) => {
  res.status(200).json({"helo": "test"})
}

exports.testLoginPost = (req, res) => {
  console.log(req.body)
  res.json({"server": "hello from server 44"}); 
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