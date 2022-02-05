import React, { useEffect } from "react"
import { Box, Button, Typography } from "@mui/material"
import { PINK_LIGHTEST } from "../../theme"

const Accesoriu = ({ onClick, item }) => {
  useEffect(() => {
    console.log(item)
  }, [item])
  return (
    <>
      <Box
        component={Button}
        onClick={() =>
          onClick({
            name: item.name,
            price: item.price,
            picture: item.picture,
            tip: item.tip,
          })
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
      <Typography
        variant='body2'
        sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
      >
        {item.tip}
      </Typography>
      <Typography sx={{ fontFamily: "Segoe Print", textAlign: "center" }}>
        {item.name} - {item.price} RON
      </Typography>
    </>
  )
}

export default Accesoriu
