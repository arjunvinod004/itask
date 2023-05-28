import React from 'react'
import './Signin.css'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Await } from 'react-router-dom'
import axios from 'axios'
import {httprequest} from 'httprequest'
  

function Signin() {
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const home = useNavigate()

    async function loginn(e){
      e.preventDefault();
      try{
        await axios.post("http://localhost:8000/",{
        email,password
      })
      .then(res=>{
        if(res.data=='exist'){
          home('/home',{state:{id:email}})
        }
       
        else if(res.data==' not exist'){
         alert('user is not exist')
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
   
    //     const data = {
    //     email,password,username
    // }
 
   if(username && email && password)
   {
    home({
        pathname:"/home",
    search:createSearchParams({
    id:email}).toString()
    })}
    else{
    alert("all fields are mandatory")}
   
        
}
  return (
    <>
    <div style={{marginLeft:'990px',marginTop:'30px'}}>
      <a style={{margin:'10px',textDecoration:'none',color:'black'}} href="">Don't have an account?</a>
      <Link to={'/'} >
      <button className='btn'>signup</button>
      </Link>
     
    </div>
    <div className='container'>
       <h2>let's go</h2>
       <form action="">
      
       {/* <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Full Name" required/> */}
      <input type="email"  onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email Address" required/>
      <input type="password"  onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" required/>
      <input type="submit" onClick={loginn} value="login"/>
      </form>
    </div>
    </>
  )

  }
export default Signin
