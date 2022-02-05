import { useState, useEffect, Fragment } from "react"
import { useNavigate } from "react-router-dom"
import { ListItem, Button, IconButton, Badge } from "@mui/material"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import { appRoutes } from "../routes"
import { PINK_LIGHT, BLACK_DEFAULT } from "../theme"
import HainePopover from "./HainePopover"
import Cumparaturi from "../pages/Cumparaturi/Cumparaturi"
import { useShoppingContext } from "../context/ShoppingContext"

const NavbarItems = () => {
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const { itemsQuantity, items } = useShoppingContext()

  const onHaineClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const onShoppingClick = () => {
    setOpenModal((prev) => !prev)
  }

  useEffect(() => {
    if (!items.length) {
      setOpenModal(false)
    }
  }, [items])

  const navigate = useNavigate()

  return (
    <>
      {appRoutes.map((route, index) => {
        if (route.name !== "Cumparaturi" && route.name !== "Haine") {
          return (
            <ListItem key={index}>
              <Button
                variant='text'
                onClick={() => navigate(route.path)}
                sx={{
                  fontFamily: "Segoe print",
                  fontSize: 18,
                  color: BLACK_DEFAULT,
                  "&:hover": { background: PINK_LIGHT, color: "white" },
                }}
                size='small'
              >
                {route.name}
              </Button>
            </ListItem>
          )
        }
        if (route.name === "Cumparaturi") {
          return (
            <ListItem key={index}>
              <IconButton
                onClick={onShoppingClick}
                disabled={!items.length}
                sx={{
                  "&:hover": {
                    background: PINK_LIGHT,
                    color: "white",
                    "& .MuiBadge-standard": {
                      background: BLACK_DEFAULT,
                      color: "white",
                    },
                  },
                }}
                size='large'
              >
                <Badge badgeContent={itemsQuantity} max={99} color='secondary'>
                  <ShoppingBagIcon fontSize='large' />
                </Badge>
              </IconButton>
            </ListItem>
          )
        }
        if (route.name === "Haine") {
          return (
            <ListItem key={index}>
              <Button
                variant='text'
                onClick={(event) => {
                  onHaineClick(event)
                }}
                sx={{
                  fontFamily: "Segoe print",
                  fontSize: 18,
                  color: BLACK_DEFAULT,
                  "&:hover": { background: PINK_LIGHT, color: "white" },
                }}
                size='small'
              >
                {route.name}
              </Button>
              <HainePopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </ListItem>
          )
        }
        return null
      })}

      <Cumparaturi openModal={openModal} onShoppingClick={onShoppingClick} />
    </>
  )
}

export default NavbarItems
