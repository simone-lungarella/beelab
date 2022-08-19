import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Grid, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import './App.css';
import Logo from './AppLogo.js';
import TitlebarImageList from './TitlebarImageList.js';

function App() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>

      <Box p={3} />

      <TitlebarImageList />

      <Box p={5} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }} >
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton size='large' href='https://it-it.facebook.com/'>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size='large' href='https://www.instagram.com/falegnameria_beelab/'>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

    </React.Fragment>
  );
}

export default App;
