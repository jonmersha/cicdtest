const express=require('express');
const app=express();

app.use(
    express.urlencoded({
      extended: true
    })
  )
  //app.use(cores())
  //app.options('*',cores())
  
  app.use(express.json())
  
  app.get('/test',(req,res)=>{
      res.send("the page is working")
  })
app.listen(80)