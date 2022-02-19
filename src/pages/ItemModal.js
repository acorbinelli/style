import { useState } from "react"
import {
  Paper,
  Grid,
  Box,
  Typography,
  Button,
  Modal,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material"
import { useShoppingContext } from "../context/ShoppingContext"
import merchandiseConfig from "../storeConfig/merchandiseConfig"
import priceConfig from "../storeConfig/priceConfig"

const ItemModal = ({ openModal, setOpenModal, selectedItem }) => {
  const { onAddItem } = useShoppingContext()
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const onSelectSize = (event) => {
    setSize(event.target.value)
  }
  const onOpenModal = () => {
    setSize("")
    setOpenModal((prev) => !prev)
  }

  return (
    <Modal
      open={openModal}
      onBackdropClick={onOpenModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{ p: 3, display: "flex", width: (theme) => theme.spacing(150) }}
      >
        <Grid container spacing={10}>
          <Grid item xs={6} xl={6}>
            <Box
              sx={{
                backgroundImage: `url(${selectedItem.picture})`,
                width: "100%",
                height: (theme) => theme.spacing(80),
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            xl={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
          >
            <Box>
              <Typography
                variant='h4'
                sx={{ fontFamily: "Segoe Print", mb: 3 }}
              >
                {selectedItem.name}
              </Typography>
              <Typography variant='h6' sx={{ fontFamily: "Segoe Print" }}>
                {quantity > 0 && quantity <= 10
                  ? selectedItem.price * quantity
                  : selectedItem.price}
                {priceConfig.currency}
              </Typography>
              {merchandiseConfig.displayItemCode && (
                <Typography
                  variant='caption'
                  sx={{ fontFamily: "Segoe Print", mb: 3 }}
                >
                  {merchandiseConfig.codeText} {selectedItem.itemCode}
                </Typography>
              )}

              {selectedItem?.availableSizes &&
                selectedItem.availableSizes.length && (
                  <FormControl fullWidth sx={{ mt: 2, mr: 5 }}>
                    <InputLabel id='select-size' sx={{ left: "-3%" }}>
                      {merchandiseConfig.sizeText}
                    </InputLabel>
                    <Select
                      labelId='select-size'
                      id='demo-simple-select'
                      value={size}
                      variant='standard'
                      onChange={onSelectSize}
                    >
                      {selectedItem.availableSizes.map((size) => (
                        <MenuItem key={size} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              <TextField
                fullWidth
                label={merchandiseConfig.quantityText}
                placeholder={merchandiseConfig.quantityText}
                type='number'
                inputProps={{ min: 1, max: 10 }}
                sx={{ mt: 3 }}
                value={quantity}
                variant='standard'
                onChange={(event) => {
                  if (event.target.value <= 10) {
                    setQuantity(parseInt(event.target.value))
                  }
                }}
              />
            </Box>
            <Box display='flex' justifyContent='flex-end'>
              <Button
                variant='contained'
                color='secondary'
                sx={{ color: "white", mt: 3, fontFamily: "Segoe Print" }}
                onClick={() => {
                  onAddItem({ ...selectedItem, quantity: quantity, size: size })
                  setQuantity(1)
                  onOpenModal()
                }}
              >
                {merchandiseConfig.orderButtonText}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default ItemModal
