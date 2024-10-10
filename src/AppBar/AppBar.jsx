import * as React from 'react';
import { MenuItem, Typography, Toolbar, Box, Menu, AppBar, Button } from '@mui/material';

export default function MenuAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background">
        <Toolbar>
          <Button 
            id='bio-menu'
            onClick={handleClick}  
          >
            <Typography variant="h6">
              Biografia
            </Typography>
          </Button>
          <Menu
            id='bio-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} sx={{backgroundColor: 'background', '&:hover': {backgroundColor: 'background'}}}>
            <Typography variant="h6">
            trolo
            </Typography>

            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
