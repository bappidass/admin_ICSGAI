import React from 'react'
import App from './App'
import Login from './Adminlogin/login'
import Main from './sidebarComponent/deshbord'
import UserReport from './sidebarComponent/userReport'
import {Route, Routes, Link} from 'react-router-dom';
function router() {
  return (
    <div>
      <Routes  >
        <Route  element={<App/>} >
           <Route path='/deshboard' element={<Main/>}/>
           <Route path='/userReport' element={<UserReport/>}/>
        </Route>
        <Route>
          <Route  path='/' element={<Login/>}/>
        </Route>
      
      </Routes>
    </div>
  )
}

export default router
