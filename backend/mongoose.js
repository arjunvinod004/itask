const mongoose= require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/mern')
.then(()=>{
    console.log(' mongodb connected');
})
.catch(()=>{
    console.log('no connected');
})

const newSchema=new mongoose.Schema({
    username:{
        type:String,
         required:true
    },
    email:{
        type:String,
        

        
    },password:{
        type:String,
       
    }
})






const collection = mongoose.model('mern',newSchema)
module.exports=collection