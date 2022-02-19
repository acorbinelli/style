import { Box, Typography } from "@mui/material"
import ContactPicture from "../../imagesUI/contact/contact.png"
import contactConfig from "../../storeConfig/contactConfig"

const Contact = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        sx={{ width: "100%", mb: 2 }}
      >
        <Box sx={{ mr: 10 }}>
          <Typography variant='h6' sx={{ fontFamily: "Segoe Print" }}>
            {contactConfig.telephoneField}
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: "Segoe Print" }}>
            {contactConfig.emailField}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${ContactPicture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: (theme) => theme.spacing(40),
            width: (theme) => theme.spacing(40),
          }}
        />
      </Box>
      <Box display='flex' justifyContent='space-between' sx={{ width: "100%" }}>
        {contactConfig.mapCode}
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          sx={{ ml: 6 }}
        >
          <Typography variant='body1' sx={{ fontFamily: "Segoe Print", mb: 3 }}>
            {contactConfig.addressField}
          </Typography>
          <Typography variant='body1' sx={{ fontFamily: "Segoe Print" }}>
            {contactConfig.workHoursField}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
