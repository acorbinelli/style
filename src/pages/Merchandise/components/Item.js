import { Box, Button, Typography } from "@mui/material"

//specify your needed currency
const CURRENCY = "RON"

const Item = ({ onClick, item }) => {
  return (
    <>
      <Box
        component={Button}
        onClick={() =>
          onClick({
            ...item,
          })
        }
        sx={{
          "&:hover": { color: (theme) => theme.palette.secondary.light },
          width: "100%",
          height: (theme) => theme.spacing(30),
          backgroundImage: `url(${item.picture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          mb: 1,
        }}
      />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Typography
          variant='caption'
          sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
        >
          {item.type}
        </Typography>
        <Typography sx={{ fontFamily: "Segoe Print", textAlign: "center" }}>
          {item.name} - {item.price} {CURRENCY}
        </Typography>
      </Box>
    </>
  )
}

export default Item
