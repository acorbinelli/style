import React from "react"
import {
  Grid,
  Box,
  ThemeProvider,
  CssBaseline,
  List,
  ListItem,
} from "@mui/material"
import Logo from "./Logo"
import NavbarItems from "./NavbarItems"

const Navbar = () => {
  return (
    <Box
      sx={{
        my: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <List sx={{ display: "flex" }}>
        <ListItem>
          <Logo />
        </ListItem>
        <NavbarItems />
      </List>
    </Box>
  )
}

export default Navbar
