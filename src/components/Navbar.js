import React from "react"
import { Link } from "react-router-dom"
import { Box, List, ListItem } from "@mui/material"
import Logo from "./Logo"
import NavbarItems from "./NavbarItems"

const Navbar = () => {
  return (
    <Box
      sx={{
        mt: 5,
        mb: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List sx={{ display: "flex" }}>
        <ListItem
          button
          component={Link}
          to='/Acasa'
          sx={{
            mr: 3,
            "&:hover": {
              background: (theme) => theme.palette.secondary.light,
              borderRadius: 2,
              color: (theme) => theme.palette.secondary.main,
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
