import { format } from 'date-fns'

export const COLUMNS = [
    {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
    },
    {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    sticky: 'left'
    },
    {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    sticky: 'left'
    },
    {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    },
    {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender'
    },
    {
    Header: 'Ip_address',
    Footer: 'Ip_address',
    accessor: 'ip_address'
    },
]
    
    export const GROUPED_COLUMNS = [
    {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
    },
    {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
    },
    {
    Header: 'Info',
    Footer: 'Info',
    columns: [
        {
            Header: 'Email',
            Footer: 'Email',
            accessor: 'email',
            },
            {
            Header: 'Gender',
            Footer: 'Gender',
            accessor: 'gender'
            },
            {
            Header: 'Ip_address',
            Footer: 'Ip_address',
            accessor: 'ip_address'
         }
    ]
    }
]
    