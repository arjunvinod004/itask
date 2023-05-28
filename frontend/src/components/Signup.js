import React from 'react'
import "./Signup.css"
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const [username, setUsername]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const home = useNavigate('')
   async function submit(e){
    //     const data = {
    //     username,email,password
    // }
    //     console.log(data);
    e.preventDefault();
    try{
      alert('details submitted')
     // window.open('/signin')
     // alert()
      await axios.post("http://localhost:8000/signup",{
      username,email,password
    })


    .then(res=>{
      if(res.data=='exist'){
     
        alert('user already exist')
      }
     
      else if(res.data=='not exist'){
        home('/signin',{state:{id:email}})
      }

    })
    .catch(e=>{
      alert('wrong')
      console.log(e);
    })

    }
    catch(e){
      console.log(e);
    }
           }
   


  return (
    <>
     <div style={{marginLeft:'990px',marginTop:'30px'}}>
      <a style={{margin:'7px',textDecoration:'none',color:'black'}} href="">Already have an account?</a>
      <Link to={'/signin'} >
      <button className='btn'>login</button>
      </Link>
     
    </div>
    <div  className='container'>
       <h2>let's go</h2>
      <form action="post">
         <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Full Name" required/>
      <input type="email"  onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email Address" required/>
      <input type="password"  onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" required/>
      <input type="submit" onClick={submit} value="sign up"/>
      
      </form>
    </div>
    </>
  )
}

export default Signup
