var mongoose=require("mongoose");
var counterSchema=new mongoose.Schema({
  _id:{type:String,required:true},
  seq:{type:Number,default:1}
})
module.exports=mongoose.model("counters",counterSchema);
