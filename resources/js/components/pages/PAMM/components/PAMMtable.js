import React, { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { api_url } from '../../../Configs/BaseUrls';
import Axios from 'axios';

export default function TopSearchSelect() {
  const [datatable, setDatatable] = React.useState({
    columns: [
        {
          label: 'Nick Name',
          field: 'nickname',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Ranking',
          field: 'ranking',
          width: 270,
        },
        {
          label: 'Performance',
          field: 'performance',
          width: 200,
        },
        {
          label: 'Days Opened',
          field: 'daysOpened',
          // sort: 'asc',
          width: 100,
        },
        {
          label: 'Number Of Investors',
          field: 'numberOfInvestors',
          // sort: 'disabled',
          width: 150,
        },
        {
          label: 'Manager Capital',
          field: 'managerCapital',
          // sort: 'disabled',
          width: 100,
        },
      ],
    rows: [


    ],
  });

  useEffect(()=>{
  Axios.post('/api/get_pamm_accounts').then(res=>{
      setDatatable({
        columns: [
          {
            label: 'Nick Name',
            field: 'nickname',
            width: 100,
            // attributes: {
            //   'aria-controls': 'DataTable',
            //   'aria-label': 'Name',
            // },
          },
          {
            label: 'Ranking',
            field: 'ranking',
            width: 100,
          },
          {
            label: 'Performance',
            field: 'performance',
            width: 100,
          },
          {
            label: 'Days Opened',
            field: 'daysOpened',
            // sort: 'asc',
            width: 100,
          },
          {
            label: 'Number Of Investors',
            field: 'numberOfInvestors',
            // sort: 'disabled',
            width: 150,
          },
          {
            label: 'Manager Capital',
            field: 'managerCapital',
            // sort: 'disabled',
            width: 100,
          },
        ],
        rows:res.data,
      })
  })
  },[])
  return (
   <div className="container mt-5">
 <MDBDataTableV5
      hover
      entriesOptions={[20, 50, 100, 500]}
      entries={20}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
    />
   </div>
  );
}
