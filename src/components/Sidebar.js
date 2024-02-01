import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ClickAwayListener } from '@mui/material';
import { Link } from 'react-router-dom';
import { useIsLargeScreen } from '../Theme/MediaQuery';

const Sidebar = ({ activeMenuItem, onMenuItemClick }) => {
  const menuItems = [
    { image: activeMenuItem === 'Dashboard' ? './Images/community.png' : './Images/communitynotactive.png', label: 'Dashboard', link: '/dashboard' },
    { image: activeMenuItem === 'Call history' ? './Images/searchactive.png' : './Images/search.png', label: 'Call history', link: '/search' },
    { image: './Images/settings.png', label: 'Settings', link: '/Setting' },
    { image: activeMenuItem === 'Ideas' ? './Images/searchactive.png' : './Images/tower.png', label: 'ideas', link: '/search' },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const isLargeScreen = useIsLargeScreen();

  if (isLargeScreen) {
    // Render the existing Sidebar for large screens
    return (
      <Drawer
        variant="permanent"
        sx={{
          display: 'flex',
          width: 100,
          flexShrink: 0,
          
          '& .MuiDrawer-paper': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            
            padding: '15px',
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              component={Link}
              to={item.link}
              selected={activeMenuItem === item.label}
              onClick={() => onMenuItemClick(item.label)}
              sx={{
                color: '#fff',
                width: '100%',
                marginLeft:1.9,
                marginTop: 3,
               
                borderRight: activeMenuItem === item.label ? '2px solid #1e2737' : 'none', // Add border style conditionally
                
              }}
            >
              <img className='w-6' src={item.image} alt={item.label} style={{ marginBottom: '10px' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
        variant="temporary"
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              component={Link}
              to={item.link}
              selected={activeMenuItem === item.label}
              onClick={() => onMenuItemClick(item.label)}
              sx={{
                color: '#fff',
                width: '90%',
                textAlign: 'center',
               
                marginTop: 3,
                marginRight:25,
                borderRight: activeMenuItem === item.label ? '2px solid #1e2737' : 'none', // Add border style conditionally
                '&:hover': {
                  backgroundColor: '#3a4a63',
                },
              }}
            >
              <img className='w-7' src={item.image} alt={item.label} style={{ marginBottom: '8px' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ClickAwayListener>
  );
};

export default Sidebar;
