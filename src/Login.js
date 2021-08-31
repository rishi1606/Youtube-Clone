import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import "./Login.css"

const Login = () => {
  
    return (
        <div className='login'>
        <div className='login__container'>
           <h2>Youtube Clone</h2>
           <img
              src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
              alt=''
           />
           <button>Login With google</button>
           <p>This Project is made using YOUTUBE DATA API</p>
        </div>
     </div>
        
    )
}

export default Login
