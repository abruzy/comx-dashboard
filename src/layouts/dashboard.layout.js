import React from 'react'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'

import {
  DASHBOARD_COMMUNITY_ROUTE,
  DASHBOARD_MARKETPLACE_ROUTE,
  DASHBOARD_PORTFOLIO_ROUTE,
  DASHBOARD_REPORTS_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_SETTINGS_ROUTE,
  HOME_ROUTE
} from '../utils/routes'

const navLinks = [
  {
    id: 1,
    to: DASHBOARD_ROUTE,
    icon: '/dash.svg',
    alt: 'dashboard'
  },
  {
    id: 2,
    to: DASHBOARD_MARKETPLACE_ROUTE,
    icon: '/home-trend-up.svg',
    alt: 'marketplace'
  },
  {
    id: 3,
    to: DASHBOARD_PORTFOLIO_ROUTE,
    icon: '/wallet-minus.svg',
    alt: 'portfolio'
  },
  {
    id: 4,
    to: DASHBOARD_COMMUNITY_ROUTE,
    icon: '/profile-2user.svg',
    alt: 'community'
  },
  {
    id: 5,
    to: DASHBOARD_REPORTS_ROUTE,
    icon: '/document-text.svg',
    alt: 'reports'
  },
  {
    id: 6,
    to: DASHBOARD_SETTINGS_ROUTE,
    icon: '/gear 1.svg',
    alt: 'settings'
  },
  {
    id: 7,
    to: '/',
    icon: '/Icon.svg',
    alt: 'dash'
  }
]

const DashboardLayout = ({ children }) => {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns='auto 1fr'
      // height={'100vh'}
      // sx={{ overflowY: 'hidden' }}
      columnGap='2rem'
    >
      <aside
        style={{
          borderRight: '1px solid #EAEBF0',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <NavLink to={HOME_ROUTE}>
          <Box
            component={'img'}
            src='/brand-logo.svg'
            alt='brand logo'
            mb={'3rem'}
          />
        </NavLink>
        <Box
          display={'flex'}
          flexDirection='column'
          rowGap={'2rem'}
          alignItems={'center'}
          mb={'auto'}
        >
          {navLinks.slice(0, 5).map(({ id, to, icon, alt }) => (
            <NavLink key={id} to={to}>
              <Box
                component={'img'}
                src={icon}
                alt={alt}
                width={24}
                height={24}
              />
            </NavLink>
          ))}
        </Box>
        <Box
          display={'flex'}
          flexDirection='column'
          alignItems={'center'}
          rowGap='2rem'
        >
          {navLinks.slice(5).map(({ id, to, icon, alt }) => (
            <NavLink key={id} to={to}>
              <Box
                component={'img'}
                src={icon}
                alt={alt}
                width={24}
                height={24}
              />
            </NavLink>
          ))}
        </Box>
      </aside>
      <main style={{ paddingTop: '2rem' }}>{children}</main>
    </Box>
  )
}

export default DashboardLayout
