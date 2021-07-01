import React, { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { api_url } from '../../../Configs/BaseUrls';
import Axios from 'axios';

export default function TopSearchSelect() {
  const [datatable, setDatatable] = React.useState([]);

  useEffect(()=>{
  Axios.post('/api/get_pamm_accounts').then(res=>{
      setDatatable(res.data);
  })
  },[])
  return (
   <div className="container-fluid web_padding mt-5" >
    {/* <MDBDataTableV5
          hover
          entriesOptions={[20, 50, 100, 500]}
          entries={20}
          pagesAmount={4}
          data={datatable}
          pagingTop
          searchTop
          searchBottom={false}
        /> */}
      <div className="card p-4 " style={{overflowX:'scroll'}}>
      <table className=" table table-borderless px-5  table-hover mdb-dataTable">
         <thead className="mdb-dataTable-head">
          <tr >
            <th class="sorting">Nick Name</th>
            <th class="sorting">Ranking</th>
            <th class="sorting">Performance</th>
            <th class="sorting">Days Opened</th>
            <th class="sorting">Number of Investors</th>
            <th class="sorting">Manager Capital</th>
            <th class="sorting">Action</th>
          </tr> 
          </thead>
          <tbody>
            {
              datatable.map((data,index)=>{
                return(
                        <tr>
                          <td>{data.nickname}</td>
                          <td>{data.ranking}</td>
                          <td>{data.performance}</td>
                          <td>{data.daysOpened}</td>
                          <td>{data.numberOfInvestors}</td>
                          <td>{data.managerCapital.toFixed(2)}</td>
                          <td><button onClick={()=>{window.open('/trading-memory/'+data.id,'_self')}} className="btn depositeOutlineButton ">Invest </button></td>
                          {/* <td>{data.nickname}</td> */}
                        </tr>
                )
              })
            }
          </tbody>
       
      </table>
      </div>
   </div>
  );
}
