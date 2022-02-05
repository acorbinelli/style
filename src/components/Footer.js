import React from "react"
import { Box, Typography, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import { BLACK_DEFAULT, PINK_LIGHT } from "../theme"

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Segoe print",
          fontSize: 16,
          color: BLACK_DEFAULT,
        }}
      >
        Urmariti-ne si pe:
      </Typography>

      <Box
        sx={{
          "& > *": {
            ml: 3,
          },
        }}
      >
        <IconButton
          sx={{ "&:hover": { color: "white", background: PINK_LIGHT } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "white", background: PINK_LIGHT } }}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "white", background: PINK_LIGHT } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "white", background: PINK_LIGHT } }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { color: "white", background: PINK_LIGHT } }}
        >
          <PinterestIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Footer
