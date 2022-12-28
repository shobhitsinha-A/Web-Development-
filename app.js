const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

  //code to get data from openweather api
  const query = req.body.cityName;
  const apikey = "217c504a9229c85198957753589746ad"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;

  https.get(url,function(response){
    console.log(response.statusCode);

  response.on("data",function(data){
  const weatherData = JSON.parse(data);
  //console.log(weatherData)
  const temp = weatherData.main.temp;
  //console.log(temp);
  const tempmin = weatherData.main.temp_min
  //console.log(tempmin);
  const des = weatherData.weather[0].description;
  //console.log(des);
  const icon = weatherData.weather[0].icon;
  const imgurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
  res.write("<p>The weather deascription is currently: "+ des+"</p>");
  res.write("<h1>The temperature in "+query+" is: "+temp+" degree Celsius.</h1>");
  res.write("<img src = "+imgurl+ " alt = weatherdescription >")
  res.send();

  // const object = {
  //   "name":"Shobhit",
  //   "favFood":"pizza"
  // };
  //stringify does opp of parse (converts into single line)
  // console.log(JSON.stringify(object));
     });
  });
})

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
