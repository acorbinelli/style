import { Grid, Box, ThemeProvider, CssBaseline } from "@mui/material"
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PINK_LIGHTEST, theme } from "./theme"
import Acasa from "./pages/Acasa/Acasa"
import Haine from "./pages/Haine/Haine"
import Accesorii from "./pages/Accesorii/Accesorii"
import Contact from "./pages/Contact/Contact"
import Cumparaturi from "./pages/Cumparaturi/Cumparaturi"
import Navbar from "./components/Navbar"

function App() {
  const location = useLocation()

  const displayPage = () => {
    const path = location.pathname

    switch (path) {
      case "/Acasa": {
        return <Acasa />
      }
      case "/Haine": {
        return <Haine />
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
      <Box
        sx={{
          height: "100vh",
          background: PINK_LIGHTEST,
        }}
        component='main'
      >
        <CssBaseline />
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={2} xl={2} />
          <Grid item xs={8} xl={8}>
            <Navbar />
            {displayPage()}
          </Grid>
          <Grid item xs={2} xl={2} />
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
