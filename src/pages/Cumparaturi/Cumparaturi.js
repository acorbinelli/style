import { useEffect } from "react"
import { Modal, Box, Typography, Button } from "@mui/material"
import { PINK_LIGHTEST } from "../../theme"

const Cumparaturi = ({ openModal, onShoppingClick, items }) => {
  useEffect(() => {
    console.log(items)
  }, [items])

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
          p: 5,
        }}
      >
        <Box sx={{ mr: 5 }}>
          <Typography
            sx={{ fontFamily: "Segoe Print", color: "primary", mb: 4 }}
          >
            Cosul tau de cumparaturi:
          </Typography>
          <Box>
            {items.map((item) => (
              <Box key={item.name} sx={{ mb: 5 }}>
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
                      <Button
                        variant='contained'
                        size='small'
                        sx={{
                          fontFamily: "Segoe Print",
                          background: "red",
                          mt: 1,
                        }}
                      >
                        Scoate
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{ fontFamily: "Segoe Print", color: "primary", mb: 4 }}
          >
            Comanda
          </Typography>
          <Typography
            sx={{ fontFamily: "Segoe Print", color: "primary", mb: 4 }}
          >
            Subtotal
          </Typography>
          <Typography
            sx={{ fontFamily: "Segoe Print", color: "primary", mb: 4 }}
          >
            Total
          </Typography>
          <Button
            variant='contained'
            size='small'
            sx={{
              fontFamily: "Segoe Print",
              background: "green",
              mt: 1,
            }}
          >
            Cumpara
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default Cumparaturi
