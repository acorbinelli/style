import React, { useEffect } from "react"
import { Box, Button, Typography } from "@mui/material"
import { PINK_LIGHTEST } from "../../../theme"

const Bluza = ({ onClick, item }) => {
  return (
    <>
      <Box
        component={Button}
        onClick={() =>
          onClick({ name: item.name, price: item.price, picture: item.picture })
        }
        sx={{
          "&:hover": { color: PINK_LIGHTEST },
          width: "100%",
          height: (theme) => theme.spacing(30),
          backgroundImage: `url(${item.picture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          mb: 1,
        }}
      />
      <Typography sx={{ fontFamily: "Segoe Print", textAlign: "center" }}>
        {item.name} - {item.price} RON
      </Typography>
    </>
  )
}

export default Bluza