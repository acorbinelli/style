import { Box, Button, Typography } from "@mui/material"
import { PINK_LIGHTEST } from "../../../theme"

const Rochie = ({ onClick, item }) => {
  return (
    <>
      <Box
        component={Button}
        onClick={() =>
          onClick({
            id: item.id,
            name: item.name,
            price: item.price,
            picture: item.picture,
          })
        }
        sx={{
          backgroundImage: `url(${item.picture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          "&:hover": { color: PINK_LIGHTEST },
          width: "100%",
          height: (theme) => theme.spacing(30),
          mb: 1,
        }}
      />
      <Typography sx={{ fontFamily: "Segoe Print", textAlign: "center" }}>
        {item.name} - {item.price} RON
      </Typography>
    </>
  )
}

export default Rochie
