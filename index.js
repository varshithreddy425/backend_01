const express=require("express")
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hi this is main")
})

app.get("/twitter",(req,res)=>{
    res.send("This is twitter page")
})

app.listen(port,()=>{
    console.log(`This is listening in port no : ${port}`)
})