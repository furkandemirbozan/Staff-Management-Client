import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function HomePageLayoutHeaderComponent() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Staff Management
        </Typography>
        <Button color="inherit" style={{ backgroundColor: '#ff6b6b', borderRadius: '20px', padding: '6px 16px', textTransform: 'none' }} onClick={() => { navigate("/login") }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default HomePageLayoutHeaderComponent;
