import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import ContactInfoConstant from '../constants/ContactInfo'
import { Link, Box } from '@mui/material'

export default function Footer() {
const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}

  return (
    <Box sx={styles.footerContainer}>
      <BottomNavigation sx={{ backgroundColor: 'background', width: 500, justifyContent: 'space-around', alignItems: 'center' }} >
        <Link
          href={`https://www.instagram.com/${ContactInfoConstant.instagram}`}
          target={'_blank'}
          color="primary"
        >
          {<InstagramIcon />}
        </Link>
        <Link
          href={`https://www.twitter.com/${ContactInfoConstant.twitter}`}
          target={'_blank'}
          color="primary"
        >
          {<XIcon />}
        </Link>
        <Link
          href={`https://www.facebook.com/${ContactInfoConstant.facebook}`}
          target={'_blank'}
          color="primary"
        >
          {<FacebookIcon />}
        </Link>

      </BottomNavigation>
    </Box>
  );
}
