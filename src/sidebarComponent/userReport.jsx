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
