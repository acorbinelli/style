import { Grid, Box, ThemeProvider, CssBaseline } from "@mui/material"
import { useLocation } from "react-router-dom"
import { theme } from "./theme"
import Home from "./pages/Home/Home"
import Merchandise from "./pages/Merchandise/Merchandise"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ShoppingProvider } from "./context/ShoppingContext"
import headerConfig from "./storeConfig/headerConfig"

function App() {
  const definedPaths = headerConfig.navItems
  const location = useLocation()

  const displayPage = () => {
    const path = location.pathname
    const foundPath = definedPaths.find((defPath) => defPath.path === path)

    if (foundPath) {
      switch (foundPath.type) {
        case "homePage": {
          return <Home />
        }
        case "merchandise": {
          return <Merchandise />
        }
        case "contactPage": {
          return <Contact />
        }
        default: {
          return <Home />
        }
      }
    }
    return <Home />
  }

  return (
    <ThemeProvider theme={theme}>
      <ShoppingProvider>
        <Box
          sx={{
            height: "100vh",
            background: (theme) => theme.palette.secondary.light,
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
