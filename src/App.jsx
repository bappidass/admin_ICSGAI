
import './App.css'
import Main from './sidebarComponent/deshbord'
import UserReport from './sidebarComponent/userReport'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import {Route, Routes, Link} from 'react-router-dom';

function main() {


  return (
    <>
<Sidebar/>
<section id="content">
<Navbar/>
<Routes >

  <Route path='/deshboard' element={<Main/>}/>
  <Route path='/userReport' element={<UserReport/>}/>
</Routes>

</section>
    </>
  )
}

export default main
