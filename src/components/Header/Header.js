import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, IconButton, Grid, TextField, InputAdornment } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Header = ({textInputProps, activeMenuItem, category, setCategory, year, setYear, updateSelectedYear, openFilterModal, categories, years,values }) => {
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
          {/* <Grid item md={3} xs={12} sx={{marginTop:{xs:4}}} sm={6}>
          <TextField
  variant="outlined"
  placeholder="Search"
  InputProps={{
    sx: {
      
      color: '#ffffff', // Text color
      borderColor: '#2E384A',
      borderRadius: 4,
      backgroundColor: '#2E384A',
    },
    startAdornment: (
      <InputAdornment position="start">
        <SearchRoundedIcon style={{ color: '#ffffff' }} /> 
      </InputAdornment>
    ),
  }}
  InputLabelProps={{
    sx: {
      color: '#ffffff',
    },
  }}
/>

          
        </Grid> */}
         
            
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
