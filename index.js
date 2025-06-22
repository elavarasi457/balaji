const e=require("express");
const n=e();
const hbs=require("hbs");
n.set("view engine", "hbs");
n.get('/',(req,res)=>{
    res.render("Home.hbs");
});
n.listen(1234,()=>{
    console.log("port connected.");
});