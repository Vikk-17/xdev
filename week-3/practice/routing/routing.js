const express = require("express")
const app = express()
const port = 3000


app.get('/health-check', function(req, res) {
  const kidneyID = req.query.kidneyID;
  const username = req.get.username;
  const password = req.get.password;

  // check for the username and password using some standard way;
  if(username != 'souvik' && passowrd != '1234'){
    res.status(404).send("This user is not found!");
    return;
  }


  res.send("Your Health is fine!")
})

app.listen(port, () => {
  console.log("App is listening on port ${port}")
})
