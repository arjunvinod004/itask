const express= require('express')
const cors= require('cors')
const axios= require('axios')
const app= express()

const { default: mongoose } = require('mongoose')
const collection = require('./mongoose')
app.use(express.json())
 app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
   const {email,password}=req.body
    
        try{
            const check = await collection.findOne({email:email})
if(check){
    res.json('exist')
}
else{
    res.json('not exist')
}

        }

        catch(e){
           res.json('not exist')
        }
       
        
        
    


   
    
    })


    app.post("/signup",async(req,res)=>{
        const {username,email,password}=req.body
        const data={
            username:username,
            email:email,
            password:password
        }
         
             try{
                 const check = await collection.findOne({email:email})
     if(check){
         res.json('exist')
     }
     else{
         res.json('not exist')
         await collection.insertMany([data])
     }
     
             }
     
             catch(e){
                res.json('not exist')
             }
            
             
             
         
     
     
        
         
         })
   

   


app.listen(8000,()=>{
    console.log('connect');
})