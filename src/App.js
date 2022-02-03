import { Grid, Box, ThemeProvider, CssBaseline } from "@mui/material"
import React from "react"
import { theme } from "./theme"
import HomePage from "./pages/Acasa/Acasa"
import Navbar from "./components/Navbar"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
        }}
        component='main'
      >
        <CssBaseline />
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={2} xl={2} />
          <Grid item xs={8} xl={8}>
            <Navbar />
            <HomePage />
          </Grid>
          <Grid item xs={2} xl={2} />
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
