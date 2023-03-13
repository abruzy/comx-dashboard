import { red } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const primaryColor = '#a560fe'
const secondaryColor = '#fd71ac'
const tertiaryColor = '#fbcd9d'
const defaultTheme = createTheme()

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {}
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
            borderRadius: 10,
            padding: '6px 30px',
            color: primaryColor,
            fontSize: defaultTheme.typography.pxToRem(16)
          }
          // outlined: {
          //   border: '1px solid #101010',
          //   background: 'transparent',
          //   color: 'black'
          // }
        }
      }
    },
    palette: {
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      },
      tertiary: {
        main: tertiaryColor
      },
      error: {
        main: red.A400
      }
    },
    typography: {
      fontFamily: 'Arial, sans-serif'
    }
  })
)

export default theme
