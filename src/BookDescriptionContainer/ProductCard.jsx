import { Box, Button } from '@mui/material'
import PortadaLibro from '../assets/portada.jpg'
import React from 'react'
import ContactInfoConstant from '../constants/ContactInfo'

function ProductCard() {

  const styles = {
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '216px',
      margin: '4px 4px'
    },
    productCardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%'
    }
  }

  return (
    <Box sx={styles.productCardContainer}>
      <Box>
        <img 
          height='300'
          src={PortadaLibro} 
          alt='book' 
        />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button 
          variant='contained' 
          size='large' 
          color='success' 
          sx={{mb: '8px'}} 
          href={`https://wa.me/${
                      ContactInfoConstant.phoneNumber
                    }?text=${encodeURIComponent(ContactInfoConstant.whatsappContactText)}`}
          target={'_blank'}
        >
          Comprar
        </Button>
      </Box>
    </Box>
  );
}

export default ProductCard;