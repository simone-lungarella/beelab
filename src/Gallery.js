import InfoIcon from '@mui/icons-material/Info';
import { Box, Modal, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';
import Image from 'mui-image';
import { React, useState } from 'react';

const ImageGalleryList = styled('ul')(({ theme }) => ({
  display: 'grid',
  padding: 0,
  margin: theme.spacing(0, 4),
  gap: 8,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 2fr)'
  },
}));

const formStyle = {
  width: 'auto',
  bgcolor: '#e0f1f8',
  maxHeight: '650px',
  maxWidth: '800px',
  position: 'relative',
  margin: 'auto',
  overflow: 'auto',
  borderRadius: '2px',
  outline: 'none',
  padding: '20px',
  paddingTop: '50px',
};

export default function Gallery() {

  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentDescription, setCurrentDescription] = useState(null);

  return (
    <>
      <ImageGalleryList sx={formStyle} variant="quilted" cols={4} rowHeight={205} >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <Image
              src={require(`${item.img}?w=248&fit=crop&auto=format`)}
              srcSet={require(`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`)}
              alt={item.title}
              loading="lazy"
              sx={{
                boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.2), 0px 2px 0px 0px rgba(0,0,0,0.14), 0px 3px 0px 0px rgba(0,0,0,0.12)',
              }}
            />

            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              subtitle={item.subtitle}
              actionIcon={
                (item.description !== null && item.description !== "") &&

                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => {
                    setCurrentTitle(item.title);
                    setCurrentDescription(item.description);
                  }}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageGalleryList>
      <Modal
        open={currentTitle != null}
        onClose={() => {
          setCurrentTitle(null);
          setCurrentDescription(null);
        }} >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #284871',
            boxShadow: 24,
            p: 2,
            maxHeight: '300px',
            overflow: 'auto'
          }} >
          <Typography variant="h4" gutterBottom textAlign={'center'} >
            {currentTitle}
          </Typography>
          <Typography variant="h6" gutterBottom justifyContent='center'>
            {currentDescription}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

const itemData = [
  {
    img: './images/1.jpeg',
    title: 'Riverniciatura',
    subtitle: 'Utilizzo di attrezzature specializzata',
    description: 'Utilizzo di attrezzature specializzata per la riverniciatura e tutte le altre operazioni di restauro',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/2.jpeg',
    title: '',
    subtitle: '',
    description: '',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/3.jpeg',
    title: 'Comodino',
    subtitle: 'Restauro e riverniciatura comodino antico',
    description: 'Restauro e riverniciatura comodino antico',
    rows: 1,
    cols: 1,
  },
  {
    img: './images/4.jpeg',
    title: 'Cassettiera',
    subtitle: 'Restauro cassettiera antica',
    description: 'Restauro e riverniciatura antico cassettiera',
    rows: 1,
    cols: 1,
  },
  {
    img: './images/5.jpeg',
    title: 'Arnia',
    subtitle: 'Costruzione arnia personalizzata',
    description: 'Progettazione e costruzione arnia cubica personalizzata',
    rows: 1,
    cols: 2,
  }
];