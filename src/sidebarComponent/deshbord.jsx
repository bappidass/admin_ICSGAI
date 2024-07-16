import React from 'react'
import userData from '../API/userdetails.json'
import { useEffect,useState } from 'react';
import Displayuser from '../component/displayUserInfo';

export default function MAIN() {
  let countUSER=0;
  let doneuser=0;
  let todayuser=0;


  userData.map(ele=>{
    if(ele.Payment=='Complete'){
      doneuser++;
    }
    });
  
  userData.map(ele=>{
  countUSER++;
  });

  userData.map(ele=>{
      let dateToday=new Date();
      const formattedDate =dateToday.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });
     
    if(formattedDate==ele.Date){
      todayuser=todayuser+1;
    }

    });



const [TotalUser,setTotalUser]=useState(countUSER);
const [PandingUser,setPandingUser]=useState(TotalUser-doneuser);
const [DonePay,setDonePay]=useState(TotalUser-PandingUser);
const [pandingpay,setpandingpay]=useState(500*PandingUser)
const [donepay,setdonepay]=useState(500*DonePay)
const [todayusers, settodayuser]=useState(todayuser);

  return (
    <main>
    	<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
			
			</div>

			<ul className="box-info">
				<li>
					<i className='bx bxs-calendar-check' ></i>
					<span className="text">
						<h3>₹{donepay}</h3>
						<p>Done Payment</p>
					</span>
				</li>
				<li>
        <i className='bx bx-cloud-download' ></i>
					<span className="text">
						<h3>{DonePay}</h3>
						<p>Pepare Uploaded</p>
					</span>
				</li>
        <li>
        <i className='bx bx-user'></i>
					<span className="text">
						<h3>{TotalUser}</h3>
						<p>Total User</p>
					</span>
				</li>
				{/* <li>
        <i className='bx bxs-dollar-circle' ></i>
					<span className="text">
						<h3>₹{pandingpay}</h3>
						<p>Panding Payment</p>
					</span>
				</li> */}
        <li>
        <i className='bx bx-user-plus' ></i>
					<span className="text">
						<h3>{todayusers}</h3>
						<p>Today User</p>
					</span>
				</li>
        <li>
        <i className='bx bxs-user-x' ></i>
					<span className="text">
						<h3>{PandingUser}</h3>
						<p>Panding user</p>
					</span>
				</li>
			</ul>
     
			<div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Recent Users</h3>
						<i className='bx bx-search' ></i>
						<i className='bx bx-filter' ></i>
					</div>
          <Displayuser/>
     </div>
     </div>
   

  </main>
  )
}
