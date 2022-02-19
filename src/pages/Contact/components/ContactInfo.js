import { Box, Paper, Typography } from "@mui/material"
import React from "react"
import ContactPicture from "../../../imagesUI/contact/contact.png"
import contactConfig from "../../../storeConfig/contactConfig"

const ContactInfo = () => {
  return (
    <Paper
      sx={{
        p: 2,
        width: "40%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${ContactPicture})`,
          height: (theme) => theme.spacing(30),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='flex-end'
        sx={{ my: 2, background: (theme) => theme.palette.secondary.main }}
      >
        <Typography
          sx={{
            fontFamily: "Segoe print",
            color: "white",
            "&:hover": {
              background: (theme) => theme.palette.secondary.main,
              color: "white",
            },
          }}
          variant='caption'
        >
          {contactConfig.telephoneField}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Segoe print",
            color: "white",
            "&:hover": {
              background: (theme) => theme.palette.secondary.main,
              color: "white",
            },
          }}
          variant='caption'
        >
          {contactConfig.emailField}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Segoe print",
            color: "white",
            "&:hover": {
              background: (theme) => theme.palette.secondary.main,
              color: "white",
            },
          }}
          variant='caption'
        >
          {contactConfig.addressField}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Segoe print",
            color: "white",
            "&:hover": {
              background: (theme) => theme.palette.secondary.main,
              color: "white",
            },
          }}
          variant='caption'
        >
          {contactConfig.workHoursField}
        </Typography>
      </Box>
      {contactConfig.mapCode}
    </Paper>
  )
}

export default ContactInfo
