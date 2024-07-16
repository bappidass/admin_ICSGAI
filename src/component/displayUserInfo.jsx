import React from 'react'
import userdata from '../API/userdetails.json'
export default function displayUserInfo( props) {
  return (
   
     
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Date Register</th>
								<th>Status</th>
                <th>Payment Status</th>
							</tr>
						</thead>
						<tbody>
              {
                userdata.map((ele,index)=>{
                 return(
                  <tr key={index}>
              <td><span className=" black">{ele.Name}</span></td>
							<td><span className=" black">{ele.Date}</span></td>
              <td><span className={ele.Paper=='Uploaded'?'status completed':'status uncompleted'}>{ele.Paper}</span></td>
              <td><span className={ele.Payment=='Complete'?'status completed':'status uncompleted'}>{ele.Payment}</span></td>
							</tr>
                 )
                })

              }
							
							
						</tbody>
					</table>
			
  )
}
