import React from 'react'
import Box from '@mui/material/Box'

import DashboardLayout from '../../layouts/dashboard.layout'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

import TldContainer from '../../components/shared-components/tld-container'
import Card from '../../components/shared-components/card'
import StickyHeadTable from '../../components/table'

const data = [
  {
    id: 1,
    title: 'Cash Balance',
    amount: '₦ 8,374,763',
    status: 'Decline',
    chart: '/Chart base.svg'
  },
  {
    id: 2,
    title: 'Securities Value',
    amount: '₦ 8,374,763',
    status: 'Decline',
    chart: '/Chart base (1).svg'
  },
  {
    id: 3,
    title: 'Loan Balance',
    amount: '₦ 8,374,763',
    status: 'Increment',
    chart: '/Chart base (2).svg'
  }
]

const MarketPlace = () => {
  return (
    <DashboardLayout>
      <Box mr={'3rem'}>
        Market
        <Box
          mt='1.8rem'
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Typography
            component={'p'}
            color='#1F1F1F'
            fontSize={'1.75rem'}
            fontWeight='600'
          >
            Market
          </Typography>
          <Box display={'flex'} alignItems='center' columnGap={'1.5rem'}>
            <TldContainer name='Page Setting' icon='/candle.svg' />
            <TldContainer name='Demo' icon='/arrow-down.svg' />
          </Box>
        </Box>
        <Typography component={'p'} color='#5F6D7E'>
          Lorem ipsum dolor sit amet consectetur. Adipiscing egestas{' '}
        </Typography>
        <Box mt='2.5rem' display={'flex'} columnGap='1.25rem'>
          {data.map(({ id, title, amount, status, chart }) => (
            <Card
              key={id}
              title={title}
              status={status}
              chart={chart}
              amt={amount}
            />
          ))}
        </Box>
        <Box mt='2.5rem' borderBottom={'1px solid #EAEBF0'}>
          <Box display={'flex'} alignItems='center' columnGap={'3rem'}>
            <Typography component={'p'} py='15px'>
              Product View
            </Typography>
            <Typography component={'p'} py='15px'>
              Product View
            </Typography>
            <Typography component={'p'} py='15px'>
              Product View
            </Typography>
            <Typography component={'p'} py='15px'>
              Product View
            </Typography>
            <Typography component={'p'} py='15px'>
              Product View
            </Typography>
            <Typography component={'p'} py='15px'>
              Product View
            </Typography>
          </Box>
        </Box>
        {/* <StickyHeadTable /> */}
        <Box sx={{ overflowY: 'auto', maxHeight: '500px' }} display='flex'>
          <Box
            mt={'2rem'}
            // height={'588px'}
            // width={'628.5px'}
            border='1px solid #EAEBF0'
            borderRadius={'10px'}
            boxShadow='0px 1px 2px rgba(16, 24, 40, 0.04)'
          >
            <Box m='1rem'>
              <Typography
                component={'p'}
                color='#1F1F1F'
                fontWeight={600}
                fontSize='1.125rem'
              >
                Buy Board
              </Typography>
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <Box
            my={'2rem'}
            // height={'588px'}
            // width={'628.5px'}
            border='1px solid #EAEBF0'
            borderRadius={'10px'}
            boxShadow='0px 1px 2px rgba(16, 24, 40, 0.04)'
          >
            <Box m='1rem'>
              <Typography
                component={'p'}
                color='#1F1F1F'
                fontWeight={600}
                fontSize='1.125rem'
              >
                Buy Board
              </Typography>
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                  <TableCell>Soybeans (SSBS) </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default MarketPlace
