import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TldContainer = ({ name, icon }) => {
  return (
    <Box
      border={'1px solid #DAE0E6'}
      padding='0.625rem'
      borderRadius='5px'
      boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.04)'}
      display={'flex'}
      justifyContent='center'
      alignItems={'center'}
      sx={{ cursor: 'pointer' }}
    >
      <Typography component={'p'} fontWeight={'600'} mr='0.25rem'>
        {name}
      </Typography>
      <Box component={'img'} src={icon} alt='candle' />
    </Box>
  )
}

export default TldContainer
