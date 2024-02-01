import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Typography,
  InputAdornment,
  TextField,
  Grid,
  Box,
  Switch,
  MenuItem,
  Menu,
  IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import { AcUnitRounded, Brightness4, Brightness7 } from '@mui/icons-material';

export default function SettingsTab({ themeMode, toggleThemeMode, theme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (mode) => {
    toggleThemeMode(mode);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const InfoField = ({ icon, label, textInputProps }) => {
    return (
      <Grid container spacing={2} alignItems="center" mt={2}>
        <Grid container item>
          {icon}
          <Typography color={'#1E2737'} ml={2} variant="caption">
            {label}
          </Typography>
        </Grid>
        <Grid item md={12} xs={12} sm={6}>
          <TextField
            fullWidth
            {...textInputProps} // Pass additional text input props
            InputProps={{
              sx: {
                '& input:active, & input:focus': {
                  borderColor: '#FCFCFC',
                  color: '#000000',
                },
                border: 'none',
              },
            }}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        padding: 5,
        backgroundColor:
          themeMode === 'light'
            ? theme.palette.background.default
            : '#000000',
      }}
    >
    
    <Card elevation={0} sx={{ display: 'flex', alignItems: 'center',padding:3, }}>
  <Typography color={'primary'}>App Mode</Typography>
  <IconButton  onClick={handleMenuClick}>
    {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
  </IconButton>
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleCloseMenu}
  >
    <MenuItem onClick={() => handleMenuItemClick('light')}>
      Light Mode
    </MenuItem>
    <MenuItem onClick={() => handleMenuItemClick('dark')}>
      Dark Mode
    </MenuItem>
  </Menu>
</Card>


      <Card elevation={0} sx={{ borderRadius: 3,marginTop:3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            My Details
          </Typography>
          <Divider sx={{ my: 2 }} />
          <InfoField label={'Name'} icon={<AccountCircleIcon />} />
          <InfoField label={'Employee ID'} icon={<WorkOutlineIcon />} />
          <InfoField label={'Email ID'} icon={<EmailIcon />} />
          <InfoField label={'Password'} icon={<LockIcon />} />
          <InfoField label={'Phone Number'} icon={<PhoneIcon />} />
        </CardContent>
      </Card>
    </Box>
  );
}
