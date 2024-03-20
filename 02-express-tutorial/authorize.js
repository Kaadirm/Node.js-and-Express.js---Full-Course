const authorize = (req, res, next) => {
  const {user} = req.query;
  
  if(user === "kadir"){
    req.user = {name: "kadir", id: 3}
  }
  else{
    res.status(401).send("Unathorized user")
  }
  console.log("authorize");
  next();
};

module.exports = authorize;