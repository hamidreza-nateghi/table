import { ThemeProvider, createTheme } from '@mui/material/styles'
import BasicTable from './components/BasicTable'

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: 24,

          '&:hover': {
            position: 'relative',
            overflow: 'visible',
            zIndex: 1,

            '& span': {
              display: 'inline-block',
              backgroundColor: 'white',
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
