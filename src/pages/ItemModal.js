import { useEffect, useState } from "react"
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

const ItemModal = ({ openModal, setOpenModal, selectedItem }) => {
  const { setItems } = useShoppingContext()
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [managedItem, setManagedItem] = useState({})

  useEffect(() => {
    if (selectedItem) {
      const newItem = {
        name: selectedItem.name,
        size: size,
        quantity: quantity,
        price: quantity * selectedItem.price,
        picture: selectedItem.picture,
      }
      setManagedItem(newItem)
    }
  }, [size, quantity, selectedItem])

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
                RON
              </Typography>
              <Typography
                variant='body2'
                sx={{ fontFamily: "Segoe Print", mb: 3 }}
              >
                cod: 000
              </Typography>
              <FormControl fullWidth sx={{ mt: 2, mr: 5 }}>
                <InputLabel id='select-size'>Marimea</InputLabel>
                <Select
                  labelId='select-size'
                  id='demo-simple-select'
                  value={size}
                  label='Marimea'
                  onChange={onSelectSize}
                >
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label='Cantitatea'
                placeholder='Cantitatea'
                type='number'
                inputProps={{ min: 1, max: 10 }}
                sx={{ mt: 3 }}
                value={quantity}
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
                sx={{ color: "white", mt: 3 }}
                onClick={() => {
                  setItems((prev) => [...prev, { ...managedItem }])
                  setQuantity(1)
                  onOpenModal()
                }}
                disabled={!size}
              >
                Comanda
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default ItemModal
