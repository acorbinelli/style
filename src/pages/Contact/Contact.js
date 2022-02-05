import { Box, Typography } from "@mui/material"
import ContactPicture from "../../images/contact/contact.png"
import Harta from "../../images/contact/harta.jpg"

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
            Telefon: 0730 234 567
          </Typography>
          <Typography variant='h6' sx={{ fontFamily: "Segoe Print" }}>
            Adresa de email: contact@thystyle.ro
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
        <Box
          sx={{
            backgroundImage: `url(${Harta})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: (theme) => theme.spacing(40),
            width: (theme) => theme.spacing(60),
            mr: 2,
          }}
        />
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <Typography variant='body1' sx={{ fontFamily: "Segoe Print", mb: 3 }}>
            Adresa: Piața Consiliul Europei 2, Timișoara 300627
          </Typography>
          <Typography variant='body1' sx={{ fontFamily: "Segoe Print" }}>
            Program: 09:00 - 21:00 Luni - Vineri
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
