import * as React from 'react';
import { Typography, Toolbar, Box, AppBar, Button } from '@mui/material';
import ContactInfoConstant from '../constants/ContactInfo';

export default function MenuAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Button 
            id='bio-menu'
            href={`mailto:${ContactInfoConstant.email}`}
          >
            <Typography variant="h6">
              Contacto
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
