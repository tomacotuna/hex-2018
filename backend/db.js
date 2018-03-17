var mongoose = require("mongoose");
var bp = require("body-parser");

const express = require('express');
const app = express();
mongoose.connect("mongodb://localhost/db");


var itemSchema = new mongoose.Schema({
  name: String,
  age: Number,
  type: String
});

var Item = mongoose.model("Item",itemSchema);

app.use(bp.json());

app.post('/item',(req,res) =>{
  Item.create(req.body, function(err,item){
    if(err){
      console.log(err);
    }else{
      console.log(item);
      res.send(item);
    }
  })
});

app.get("/item",(req,res) => {
  //res.send("Hello World!");
  Item.find({},function(err,items){
    if(err){
      console.log(err);
    }else{
    console.log(items);
    res.send(items);
    }
  });
});

app.delete("/item",(req,res) => {
  Item.find(req.body).remove(function(err){
    if(err){
      console.log(err);
    }else{
      res.send("Item deleted");
    }
  });
});

app.delete("/item/clear", (req,res)=>{
  Item.remove({},function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Cleared database");
      res.send("Cleared database");
    }
  });
});

app.listen(3000, function(){
  console.log("listening on port 3000");
})
