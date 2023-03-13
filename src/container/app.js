import React, { Suspense } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/styles'

import theme from '../utils/theme'

import AppRoutes from './routes'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
