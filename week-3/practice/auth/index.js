const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();


const ALL_USERS = [
  {
    username: "souvikc@gmail.com",
    password: "123",
    name: "Souvik",
  },
  {
    username: "chakraborty77@gmail.com",
    password: "456",
    name: "Chakra",
  },
  {
    username: "hipster@gmail.com",
    password: "789",
    name: "hipp",
  },
];

app.use(express.json());
// console.log(ALL_USERS.length);
function userExist(username, password){
  // Write a logic to return true or false if this user exist 
  // in ALL_USERS array
  let userFlag = false;
  for(let i = 0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
      userFlag = true;
    }
  }
  return userFlag;
}


app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  if(!userExist(username, password)){
    return res.status(403).json({
      msg: "The user is not in our in memory db",
    });
  }

  let token = jwt.sign({username: username}, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  res.json({
    users: ALL_USERS.filter((value) => {
      if(value.usernamme == username) return false;
      else return true;
    })
  });
});

app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
