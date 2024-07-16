import React from 'react'
import './login.css'
export default function login() {
  return (
    <div className='maindiv'>
    
      <div class="wrapper">
         <div class="title">
            Login admin
         </div>
         <form action="/deshboard">
            <div class="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div class="content">
               {/* <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div> */}
               {/* <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div> */}
            </div>
            <div class="field">
               <input type="submit" value="Login"/>
            </div>
            {/* <div class="signup-link">
               Not a member? <a href="#">Signup now</a>
            </div> */}
         </form>
      </div>
      
    </div>
  )
}
