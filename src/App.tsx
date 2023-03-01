import { ThemeProvider, createTheme } from '@mui/material/styles'
import BasicTable from './components/BasicTable'

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          maxWidth: 24,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',

          '&:hover': {
            overflow: 'visible',
            position: 'relative',
            zIndex: 1,

            '& span': {
              backgroundColor: 'white',
              display: 'inline-block',
            },
          },
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicTable />
    </ThemeProvider>
  )
}

export default App
