import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BottomNavigation, Box, createTheme, GlobalStyles, Grid, IconButton, ThemeProvider, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import './App.css';
import Logo from './AppLogo.js';
import Gallery from './Gallery.js';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#adb4ba',
      dark: '#3c6baa  ',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#39621d',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success: {
      light: '#ff7961',
      main: '#5fa631',
      dark: '#508929',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: '#e0f1f8'
          },
          '*::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      />

      <AppBar>
        <Toolbar>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="overline" component="div">
                FALEGNAMERIA DI STANCO FRANCESCO
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary" justifyContent='center' textAlign={'center'}>
                Produzione materiale apistico, restauro e recupero mobili antichi, realizzazione di oggetti di design, lavorazioni e incisioni con pantografo CNC
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box p={8} />
      <Gallery />
      <Box p={5} />

      <BottomNavigation sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#e0f1f8',
        borderTop: '1px solid #e0f1f8',
        borderBottom: '1px solid #e0f1f8',
        boxShadow: '0px -1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px 0px rgba(0,0,0,0.12)',
        padding: '0px',
        margin: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexWrap: 'nowrap',
        },
      }} >

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton size='large' href='https://www.facebook.com/BeeLab-Falegnameria-102076162611737/'>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size='large' href='https://www.instagram.com/falegnameria_beelab/'>
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size='large' href='mailto:simonelungarella@gmail.com'>
              <AlternateEmailIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant='overline' fontSize={16} >
              + 39 347 243 1676
            </Typography>
          </Grid>
        </Grid>

      </BottomNavigation>

    </ThemeProvider>
  );
}

export default App;
