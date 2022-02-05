import { Box, Typography, Button } from "@mui/material"
import { useShoppingContext } from "../../context/ShoppingContext"
import { PINK_LIGHT } from "../../theme"

const Checkout = () => {
  const { totalPrice, itemsQuantity, items, onPurchase } = useShoppingContext()

  return (
    <Box
      sx={{
        background: PINK_LIGHT,
        p: 2,
        color: "white",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant='h5' sx={{ fontFamily: "Segoe Print", mb: 4 }}>
          Comanda
        </Typography>
        {items &&
          items.map((item) => (
            <Box display='flex' key={item.id}>
              <Typography variant='subtitle2' sx={{ mr: 2 }}>
                {item.name}
              </Typography>
              <Typography
                variant='subtitle2'
                sx={{ fontFamily: "Segoe Print" }}
              >
                {item.quantity} buc x {item.price} RON
              </Typography>
            </Box>
          ))}
        <Typography
          variant='overline'
          sx={{ fontFamily: "Segoe Print", mb: 3 }}
        >
          Subtotal: {totalPrice} RON
        </Typography>
        <Box sx={{ borderBottom: "1px solid white" }} />
        <Typography variant='h6' sx={{ fontFamily: "Segoe Print", mt: 1 }}>
          Total:
        </Typography>
        <Box display='flex' alignItems='flex-end' sx={{ mb: 4 }}>
          <Typography variant='h5' sx={{ fontFamily: "Segoe Print", mr: 1 }}>
            {Math.round((totalPrice / 100) * (19 + 100))} RON
          </Typography>
          <Typography variant='subtitle2' sx={{ fontFamily: "Segoe Print" }}>
            + TVA 19%
          </Typography>
        </Box>
      </Box>
      <Button
        onClick={onPurchase}
        variant='contained'
        size='small'
        sx={{
          fontFamily: "Segoe Print",
          background: "green",
          mt: 1,
        }}
      >
        Cumpara ({itemsQuantity} produse)
      </Button>
    </Box>
  )
}

export default Checkout
