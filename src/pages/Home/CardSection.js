import React from "react"
import { Box, Card, Typography, Button } from "@mui/material"
import Prod1 from "../../imagesUI/home/cards/prod1.jpg"
import Prod2 from "../../imagesUI/home/cards/prod2.jpg"
import Prod3 from "../../imagesUI/home/cards/prod3.jpg"

const CardSection = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Card
        variant='elevation'
        elevation={3}
        sx={{
          mx: 4,
          p: 2,
          width: (theme) => theme.spacing(25),
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            color: "white",
            background: (theme) => theme.palette.secondary.light,
          },
        }}
        component={Button}
      >
        <Box
          sx={{
            width: (theme) => theme.spacing(20),
            height: (theme) => theme.spacing(25),
            backgroundImage: `url(${Prod2})`,
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Segoe Print",
            fontSize: 10,
            fontWeight: 600,
            mt: 1,
          }}
        >
          Reducere 10% pentru studenti
        </Typography>
      </Card>
      <Card
        variant='elevation'
        elevation={3}
        sx={{
          mx: 4,
          p: 2,
          width: (theme) => theme.spacing(25),
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            color: "white",
            background: (theme) => theme.palette.secondary.light,
          },
        }}
        component={Button}
      >
        <Box
          sx={{
            width: (theme) => theme.spacing(20),
            height: (theme) => theme.spacing(25),
            backgroundImage: `url(${Prod1})`,
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Segoe Print",
            fontSize: 10,
            fontWeight: 600,
            mt: 1,
          }}
        >
          Articole noi adaugate
        </Typography>
      </Card>
      <Card
        variant='elevation'
        elevation={3}
        sx={{
          mx: 4,
          p: 2,
          width: (theme) => theme.spacing(25),
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            color: "white",
            background: (theme) => theme.palette.secondary.light,
          },
        }}
        component={Button}
      >
        <Box
          sx={{
            width: (theme) => theme.spacing(20),
            height: (theme) => theme.spacing(25),
            backgroundImage: `url(${Prod3})`,
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Segoe Print",
            fontSize: 10,
            fontWeight: 600,
            mt: 1,
          }}
        >
          Reducere la bluze
        </Typography>
      </Card>
    </Box>
  )
}

export default CardSection
