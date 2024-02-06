import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Refresh as RefreshIcon, Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CenteredContent = styled(Grid)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
export default function DashBoard({theme,themeMode}) {
  const navigate = useNavigate();
    const RunHistory =()=>{
        navigate('/callList')
        }
  return (
    <CenteredContent container>
      <Grid item>
      
          <img src="./images/cuate.png" alt="Cuate" />
          <Button onClick={RunHistory}
            variant="outlined"
            startIcon={<RefreshIcon />}
            sx={{ width: '100%', borderRadius: 3, padding: 2, backgroundColor: '#1e2737', color: '#ffff',marginTop:10 }}
          >
            Go Back
          </Button>
      </Grid>
    </CenteredContent>
  );
}
