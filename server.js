const express=require("express");
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Api is running on local host 3000");
})

app.get("/",(req,res)=>{
    res.send("Hey your backend is running yooo!!");
})

app.post("/api/test",async(req,res)=>{
    const{method,url}=req.body;
    if(!method||!url){
        return res.status(400).json({
            message:"Both Method and Url are required"
        })
    }
    console.log(method);
    console.log(url);
    const response=await fetch(url,{
        method:method
    })
    const data=await response.json();
    res.status(200).json({
        message:"YOYO",
        data:data
    })
})