import InfoIcon from '@mui/icons-material/Info';
import { Box, Modal, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { React, useState } from 'react';
import Image from 'mui-image';

const formStyle = {
  width: 'auto',
  bgcolor: 'background.paper',
  maxHeight: '600px',
  maxWidth: '800px',
  position: 'relative',
  margin: 'auto',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '2px',
  outline: 'none',
  padding: '20px',
  paddingTop: '50px',
};

export default function TitlebarImageList() {

  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentDescription, setCurrentDescription] = useState(null);

  return (
    <>
      <ImageList sx={formStyle} variant="quilted" cols={4} rowHeight={205} >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <Image
              src={require(`${item.img}?w=248&fit=crop&auto=format`)}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy" />

            {(item.description != null && item.description != "") &&
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                actionIcon={
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
            }
          </ImageListItem>
        ))}
      </ImageList>
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
  },
  {
    img: './images/4.jpeg',
    title: 'Comò',
    subtitle: 'Restauro comò antico',
    description: 'Restauro e riverniciatura comò antico',
  },
  {
    img: './images/5.jpeg',
    title: 'Arnia',
    subtitle: 'Costruzione arnia personalizzata',
    rows: 2,
    cols: 2,
    description: '',
  }
];