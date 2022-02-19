import { useState, useEffect } from "react"
import headerConfig from "../storeConfig/headerConfig"
import { useNavigate } from "react-router-dom"
import { ListItem, Button, IconButton, Badge } from "@mui/material"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import Popover from "./Popover"
import Basket from "../pages/Basket/Basket"
import { useShoppingContext } from "../context/ShoppingContext"

const NavbarItems = () => {
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const { itemsQuantity, items, setSelectedCategory } = useShoppingContext()

  const onMerchandiseClick = (event) => {
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

  const getPagePerType = (navItem, index) => {
    const type = navItem.type

    switch (type) {
      case "homePage": {
        return (
          <ListItem key={index}>
            <Button
              variant='text'
              onClick={() => navigate(navItem.path)}
              sx={{
                fontFamily: "Segoe print",
                fontSize: 18,
                color: (theme) => theme.palette.primary.main,
                "&:hover": {
                  background: (theme) => theme.palette.secondary.main,
                  color: "white",
                },
              }}
              size='small'
            >
              {navItem.tag}
            </Button>
          </ListItem>
        )
      }

      case "merchandise": {
        return (
          <ListItem key={index}>
            <Button
              variant='text'
              onClick={(event) => {
                if (navItem?.subMenu) {
                  onMerchandiseClick(event)
                } else {
                  navigate(navItem.path)
                  setSelectedCategory(navItem.tag)
                }
              }}
              sx={{
                fontFamily: "Segoe print",
                fontSize: 18,
                color: (theme) => theme.palette.primary.main,
                "&:hover": {
                  background: (theme) => theme.palette.secondary.main,
                  color: "white",
                },
              }}
              size='small'
            >
              {navItem.tag}
            </Button>
            {navItem?.subMenu && (
              <Popover
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                subMenu={navItem.subMenu}
                parentMenuName={navItem.tag}
              />
            )}
          </ListItem>
        )
      }
      case "contactPage": {
        return (
          <ListItem key={index}>
            <Button
              variant='text'
              onClick={() => navigate(navItem.path)}
              sx={{
                fontFamily: "Segoe print",
                fontSize: 18,
                color: (theme) => theme.palette.primary.main,
                "&:hover": {
                  background: (theme) => theme.palette.secondary.main,
                  color: "white",
                },
              }}
              size='small'
            >
              {navItem.tag}
            </Button>
          </ListItem>
        )
      }
      case "shoppingBasket": {
        return (
          <ListItem key={index}>
            <IconButton
              onClick={onShoppingClick}
              disabled={!items.length}
              sx={{
                "&:hover": {
                  background: (theme) => theme.palette.secondary.main,
                  color: "white",
                  "& .MuiBadge-standard": {
                    background: (theme) => theme.palette.primary.main,
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
      default: {
        return null
      }
    }
  }

  return (
    <>
      {headerConfig.navItems.map((navItem, index) =>
        getPagePerType(navItem, index)
      )}
      <Basket openModal={openModal} onShoppingClick={onShoppingClick} />
    </>
  )
}

export default NavbarItems
