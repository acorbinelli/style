import { Modal, Box, Typography } from "@mui/material"
import { PINK_LIGHTEST } from "../../theme"
import { useShoppingContext } from "../../context/ShoppingContext"
import AddRemoveQuantity from "./AddRemoveQuantity"
import Checkout from "./Checkout"

const Cumparaturi = ({ openModal, onShoppingClick }) => {
  const { items } = useShoppingContext()

  return (
    <Modal
      open={openModal}
      onBackdropClick={onShoppingClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: PINK_LIGHTEST,
          borderRadius: 2,
          display: "flex",
          p: 3,
        }}
      >
        <Box sx={{ mr: 5, p: 2, maxHeight: "80vh", overflowY: "auto" }}>
          <Typography
            variant='h6'
            sx={{ fontFamily: "Segoe Print", color: "primary", mb: 4 }}
          >
            Cosul tau de cumparaturi:
          </Typography>
          {items &&
            items.map((item) => {
              if (item?.quantity > 0) {
                return (
                  <Box key={item.id} sx={{ mb: 5 }}>
                    <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          backgroundImage: `url(${item.picture})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: (theme) => theme.spacing(10),
                          width: (theme) => theme.spacing(10),
                          mr: 5,
                        }}
                      />
                      <Box display='flex' alignItems='center'>
                        <Box sx={{ mr: 5, width: "100%" }}>
                          <Typography
                            variant='h6'
                            sx={{
                              fontFamily: "Segoe Print",
                              color: "primary",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{
                              fontFamily: "Segoe Print",
                              color: "primary",
                            }}
                          >
                            {item.quantity} buc
                          </Typography>
                        </Box>
                        <AddRemoveQuantity item={item} />
                      </Box>
                    </Box>
                  </Box>
                )
              }
              return null
            })}
        </Box>
        <Checkout />
      </Box>
    </Modal>
  )
}

export default Cumparaturi
