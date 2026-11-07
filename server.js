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
    try{
    const{method,url,headers}=req.body;
    if(!method||!url){
        return res.status(400).json({
            message:"Both Method and Url are required"
        })
    }
    const response=await fetch(url,{
        method:method,
        headers:headers
    })
    const data=await response.json();
    res.status(response.status).json({
        message:"external api fetched",
        data:data
    })
}catch(err){
    console.log(err);
    res.status(500).json({
        message:"failed to fetch external api"
    })
}
})