import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {useLocation,useNavigate } from 'react-router-dom'

function Home() {
  const location =useLocation()
    
  return (
    <>
<div style={{marginLeft:'990px',marginTop:'30px'}}>
  <a  style={{margin:'7px',textDecoration:'none',color:'black'}} href="">Hi,{location.state.id}</a>
<Link to={'/signin'}>
<button className='btn'>logout</button>
</Link>
 
</div>
    <div className='container'>
   <section>
    {/* <h1>name your organization</h1> */}
<input type="text" placeholder="name your organization" />

   <h2>Welcome to our website!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus lectus ut tristique dignissim.</p>
   </section>
    </div>
    </>
  )
}

export default Home
