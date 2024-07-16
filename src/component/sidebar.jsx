import React, { useState } from 'react'
import {Route, Routes, Link} from 'react-router-dom';
export default function sidebar() {
   

	const [activeItem,setactiveItem]=useState('Dashboard');

	const [ItemRemove,setItemRemove]=useState('hide');
  


  return (
    <section id="sidebar" className={ItemRemove}>
		<a href="#" className="brand">
			<i className='bx bx-menu' onClick={()=>{ItemRemove=='hide'?setItemRemove(''):setItemRemove('hide')}} ></i>
			<span className="text">Admin ICSGAI</span>
		</a>
		<ul className="side-menu top">
			<li  className={activeItem==='Dashboard'? 'active':''}>
				<Link to="/deshboard">
				<a href="#" onClick={()=>{setactiveItem('Dashboard');}}>
					<i className='bx bxs-dashboard' ></i>
					<span className='text'>Dashboard</span>
				</a>
				</Link>
			</li>
			<li className={activeItem==='User report'? 'active':''}>
			<Link to="/userReport">
				<a href="#" onClick={()=>{setactiveItem('User report');}}>
						<i className='bx bxs-group' ></i>
					<span className="text">User report</span>
				</a>
				</Link>
			</li>
			<li className={activeItem==='Payment collection'? 'active':''}>
			<a href="#" onClick={()=>{setactiveItem('Payment collection');}}>
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Payment collection</span>
				</a>
			</li>
			<li className={activeItem==='Paper'? 'active':''}>
			<a href="#" onClick={()=>{setactiveItem('Paper');}}>
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Paper</span>
				</a>
			</li>
			
		</ul>
		<ul className="side-menu">
			<li>
				<a href="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" className="logout">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
  )
}
