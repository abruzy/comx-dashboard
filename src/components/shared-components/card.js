import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Card = ({ title, chart, amt, status }) => {
  return (
    <Box
      border={'1px solid #EAEBF0'}
      borderRadius='10px'
      boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.04)'}
      padding='1rem 1.25rem'
    >
      <Typography component={'p'} color='#1F1F1F' fontWeight={600}>
        {title}
      </Typography>
      <Box display={'flex'} mt='1rem' columnGap={'2rem'}>
        <Box>
          <Typography
            component={'p'}
            color='#1F1F1F'
            fontWeight={600}
            fontSize='1.75rem'
          >
            {amt}
          </Typography>
          <Box
            display={'flex'}
            columnGap='8px'
            alignItems={'center'}
            mt='0.75rem'
          >
            <Typography
              component={'p'}
              color='#E2341D'
              p={'2px 8px'}
              borderRadius='5px'
              fontSize={'0.8rem'}
              fontWeight={500}
              sx={{ background: '#FFF2F0' }}
            >
              {status}
            </Typography>
            <Typography
              component={'p'}
              color='#5F6D7E'
              fontSize={'0.8rem'}
              fontWeight={500}
            >
              Monitored Monthly
            </Typography>
          </Box>
        </Box>
        <Box component={'img'} src={chart} alt='chart base' />
      </Box>
    </Box>
  )
}

export default Card
