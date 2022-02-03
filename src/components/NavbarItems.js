import React from "react"
import { useNavigate } from "react-router-dom"
import { List, ListItem, Box, Typography, Button } from "@mui/material"
import { appRoutes } from "../routes"
import { typography } from "@mui/system"

const NavbarItems = () => {
  const navigate = useNavigate()
  return (
    <>
      {appRoutes.map((route) => (
        <ListItem key={route.name}>
          <Button variant='text' onClick={() => navigate(route.path)}>
            {route.name}
          </Button>
        </ListItem>
      ))}
    </>
  )
}

export default NavbarItems
