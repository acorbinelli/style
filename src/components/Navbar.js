import React from "react"
import { Link } from "react-router-dom"
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
import { PINK_LIGHTEST, PINK_LIGHT } from "../theme"

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
        <ListItem
          button
          component={Link}
          to='/Acasa'
          sx={{
            "&:hover": {
              background: PINK_LIGHTEST,
              borderRadius: 2,
              color: PINK_LIGHT,
            },
          }}
        >
          <Logo />
        </ListItem>
        <NavbarItems />
      </List>
    </Box>
  )
}

export default Navbar
