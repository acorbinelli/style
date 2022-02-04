import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  ListItem,
  Box,
  Button,
  IconButton,
  Badge,
  Modal,
  Typography,
  Popover,
} from "@mui/material"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import { appRoutes } from "../routes"
import { PINK_LIGHTEST, PINK_LIGHT, BLACK_DEFAULT } from "../theme"
import HainePopover from "./HainePopover"
import { useShoppingContext } from "../context/ShoppingContext"

const NavbarItems = () => {
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const { itemsQuantity } = useShoppingContext()

  const onHaineClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const onShoppingClick = () => {
    setOpenModal((prev) => !prev)
  }

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
      })}

      {
        <Modal
          open={openModal}
          onBackdropClick={onShoppingClick}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: PINK_LIGHTEST,
              borderRadius: 2,
              display: "flex",
              p: 2,
            }}
          >
            <Box display='flex' flexDirection='column' sx={{ mr: 1 }}>
              <Box>Picture</Box>
              <Box>Page</Box>
            </Box>
            <Box sx={{ ml: 1 }}>
              <Typography>PRODUCT NAME</Typography>
              <Typography>PRODUCT PRICE</Typography>
            </Box>
          </Box>
        </Modal>
      }
    </>
  )
}

export default NavbarItems
