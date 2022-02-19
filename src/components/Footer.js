import React from "react"
import { Box, Typography, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"

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
          color: (theme) => theme.palette.primary.main,
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
          sx={{
            "&:hover": {
              color: "white",
              background: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "white",
              background: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "white",
              background: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "white",
              background: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "white",
              background: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          <PinterestIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Footer
