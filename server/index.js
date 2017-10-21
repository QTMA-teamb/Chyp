const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"../client/public")))
app.use(express.static(path.join(__dirname,"../client/dist")))
app.get("/app", (req,res,next)=>{
  res.sendFile(path.resolve(__dirname,"../client/dist/app.index.html"))
})

app.listen(3000, ()=>{
  console.log("Chyp server running on port 3000")
})
