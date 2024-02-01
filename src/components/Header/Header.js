import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, IconButton, Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';


const Header = ({ activeMenuItem, category, setCategory, year, setYear, updateSelectedYear, openFilterModal, categories, years,values }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E2737', padding: 3 }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: "400" }}>
              {activeMenuItem}
            </Typography>
            <p style={{fontFamily:'sans-serif',fontWeight:'500'}}>
            Empowering Customer Service Excellence
            </p>
          </Grid>
          
         
            
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
