import { Grid, Box, ThemeProvider, CssBaseline } from "@mui/material"
import { useLocation } from "react-router-dom"
import { PINK_LIGHTEST, theme } from "./theme"
import Acasa from "./pages/Acasa/Acasa"
import Bluze from "./pages/Haine/Bluze/Bluze"
import Fuste from "./pages/Haine/Fuste/Fuste"
import Pantaloni from "./pages/Haine/Pantaloni/Pantaloni"
import Rochii from "./pages/Haine/Rochii/Rochii"
import Tricouri from "./pages/Haine/Tricouri/Tricouri"
import Accesorii from "./pages/Accesorii/Accesorii"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ShoppingProvider } from "./context/ShoppingContext"

function App() {
  const location = useLocation()

  const displayPage = () => {
    const path = location.pathname

    switch (path) {
      case "/Acasa": {
        return <Acasa />
      }
      case "/Bluze": {
        return <Bluze />
      }
      case "/Fuste": {
        return <Fuste />
      }
      case "/Pantaloni": {
        return <Pantaloni />
      }
      case "/Rochii": {
        return <Rochii />
      }
      case "/Tricouri": {
        return <Tricouri />
      }
      case "/Accesorii": {
        return <Accesorii />
      }
      case "/Contact": {
        return <Contact />
      }
      default: {
        return <Acasa />
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <ShoppingProvider>
        <Box
          sx={{
            height: "100vh",
            background: PINK_LIGHTEST,
          }}
          component='main'
        >
          <CssBaseline />
          <Grid container>
            <Grid item xs={3} xl={3} />
            <Grid
              item
              xs={6}
              xl={6}
              sx={{ minWidth: (theme) => theme.spacing(100) }}
            >
              <Navbar />
              {displayPage()}
              <Footer />
            </Grid>
            <Grid item xs={3} xl={3} />
          </Grid>
        </Box>
      </ShoppingProvider>
    </ThemeProvider>
  )
}

export default App
