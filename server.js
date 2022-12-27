const express = require("express");

const app = express();

app.get("/",function(request,response){
  //console.log(request);
  response.send("<h1>Hello WORLD!</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me :-)")
});

app.get("/about",function(req,res){
  res.send("Bio: I own this website ;)")
});

app.get("/hobbies",function(req,res){
  res.send("HO HO BIES");
})
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
