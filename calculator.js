//setup

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
// app.get("/",function(req,res){
//   res.send("Hello World");
// });

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  //console.log(typeof result);
  res.send("Result of calculation: "+result);
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
});

app.post("/bmicalculator",function(req,res){
  //var weight = parseFloat(req.body)
  var we = parseFloat(req.body.weight);
  var he = parseFloat(req.body.height);
  var result = we/(he*he);
  console.log(typeof result);
  var final = result.toString()
  console.log(typeof final);
  //res.send(final)
  res.send(String(result));
});


app.listen(3000,function(){
  console.log("Server running on port 3000");
});
