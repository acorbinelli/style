import { useNavigate } from "react-router-dom"
import { Box, Popover as MUIPopover, Button } from "@mui/material"
import { useShoppingContext } from "../context/ShoppingContext"

const Popover = ({ anchorEl, setAnchorEl, subMenu, parentMenuName }) => {
  const { setSelectedCategory } = useShoppingContext()
  const navigate = useNavigate()

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <MUIPopover
      id={`${parentMenuName}`}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {subMenu.map((item, index) => (
          <Button
            key={index}
            variant='text'
            onClick={() => {
              navigate(`/${parentMenuName}`)
              setSelectedCategory(item)
              handleClose()
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
            {item}
          </Button>
        ))}
      </Box>
    </MUIPopover>
  )
}

export default Popover
