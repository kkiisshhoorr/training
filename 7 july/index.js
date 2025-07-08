import express from "express"
import userRouter from "./routes/user.routes.js"


const app =express()

// app.get("/user",(req,res)=>{
//     return res.json({
//         name:"kishor",
//         location:"BLR"
//     })
// })

app.use("/api/user",userRouter)


// app.post("/user",(req,res)=>{
//     console.log("iam request")
//         return res.send("i am post request");
//     })
app.listen(4000,()=>{
    console.log("server connected")
})


