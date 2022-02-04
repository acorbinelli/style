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
import { PINK_LIGHTEST, PINK_LIGHT, BLACK_DEFAULT } from "../theme"

const HainePopover = ({ anchorEl, setAnchorEl }) => {
  const navigate = useNavigate()

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  return (
    <Popover
      id='haine'
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
        <Button
          variant='text'
          onClick={() => {
            navigate("/Bluze")
            handleClose()
          }}
          sx={{
            fontFamily: "Segoe print",
            fontSize: 18,
            color: BLACK_DEFAULT,
            "&:hover": { background: PINK_LIGHT, color: "white" },
          }}
          size='small'
        >
          Bluze
        </Button>
        <Button
          variant='text'
          onClick={() => {
            navigate("/Fuste")
            handleClose()
          }}
          sx={{
            fontFamily: "Segoe print",
            fontSize: 18,
            color: BLACK_DEFAULT,
            "&:hover": { background: PINK_LIGHT, color: "white" },
          }}
          size='small'
        >
          Fuste
        </Button>
        <Button
          variant='text'
          onClick={() => {
            navigate("/Pantaloni")
            handleClose()
          }}
          sx={{
            fontFamily: "Segoe print",
            fontSize: 18,
            color: BLACK_DEFAULT,
            "&:hover": { background: PINK_LIGHT, color: "white" },
          }}
          size='small'
        >
          Pantaloni
        </Button>
        <Button
          variant='text'
          onClick={() => {
            navigate("/Rochii")
            handleClose()
          }}
          sx={{
            fontFamily: "Segoe print",
            fontSize: 18,
            color: BLACK_DEFAULT,
            "&:hover": { background: PINK_LIGHT, color: "white" },
          }}
          size='small'
        >
          Rochii
        </Button>
        <Button
          variant='text'
          onClick={() => {
            navigate("/Tricouri")
            handleClose()
          }}
          sx={{
            fontFamily: "Segoe print",
            fontSize: 18,
            color: BLACK_DEFAULT,
            "&:hover": { background: PINK_LIGHT, color: "white" },
          }}
          size='small'
        >
          Tricouri
        </Button>
      </Box>
    </Popover>
  )
}

export default HainePopover
