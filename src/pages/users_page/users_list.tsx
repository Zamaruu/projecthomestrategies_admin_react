import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useContext } from 'react';
import { userpageContext } from '../../context/userpage_context';
import { UserModel } from '../../services/models/user';

const columns: GridColDef[] = [
  { field: 'userId', 
    headerName: 'ID', 
    width: 70 , 
    valueGetter: (params: GridValueGetterParams) => `${params.row.userId || ''}`,
  },
  { field: 'firstname', headerName: 'First name', width: 130 },
  { field: 'surname', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'E-Mail',
    type: 'string',
    width: 150,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstname || ''} ${params.row.lastname || ''}`,
  },
];

const UsersList = () => {
    const { users, setUsers } = useContext(userpageContext);

    return (
      <Box mt={2}>    
        <div style={{ height: 1000, width: '100%' }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row.userId}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Box>
    );
}

export default UsersList;