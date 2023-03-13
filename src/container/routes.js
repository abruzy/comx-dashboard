import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  DASHBOARD_COMMUNITY_ROUTE,
  DASHBOARD_MARKETPLACE_ROUTE,
  DASHBOARD_PORTFOLIO_ROUTE,
  DASHBOARD_REPORTS_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_SETTINGS_ROUTE
} from '../utils/routes'

const Dashboard = React.lazy(() => import('../pages/dashboard/index'))
const MarketPlace = React.lazy(() => import('../pages/dashboard/market-place'))
const Portfolio = React.lazy(() => import('../pages/dashboard/portfolio'))
const Community = React.lazy(() => import('../pages/dashboard/community'))
const Reports = React.lazy(() => import('../pages/dashboard/reports'))
const Settings = React.lazy(() => import('../pages/dashboard/settings'))
const NotFound = React.lazy(() => import('../pages/not-found'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
      <Route path={DASHBOARD_MARKETPLACE_ROUTE} element={<MarketPlace />} />
      <Route path={DASHBOARD_PORTFOLIO_ROUTE} element={<Portfolio />} />
      <Route path={DASHBOARD_COMMUNITY_ROUTE} element={<Community />} />
      <Route path={DASHBOARD_REPORTS_ROUTE} element={<Reports />} />
      <Route path={DASHBOARD_SETTINGS_ROUTE} element={<Settings />} />
      <Route path='*' element={NotFound} />
    </Routes>
  )
}

export default AppRoutes
