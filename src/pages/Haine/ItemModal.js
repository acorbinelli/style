import { useEffect, useState } from "react"
import Cuflor from "../../images/bluze/Cuflor.jpg"
import Grenar from "../../images/bluze/Grenar.jpg"
import Gwendolyn from "../../images/bluze/Gwendolyn.jpg"
import Jowi from "../../images/bluze/Jowi.jpg"
import Lucuna from "../../images/bluze/Lucuna.jpg"
import Zgren from "../../images/bluze/Zgren.jpg"
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
import { useShoppingContext } from "../../context/ShoppingContext"

const ItemModal = ({ openModal, setOpenModal, selectedItem }) => {
  const { setItems } = useShoppingContext()
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState({})

  useEffect(() => {
    setItem({
      name: selectedItem.name,
      size: size,
      quantity: quantity,
      price: quantity * selectedItem.price,
    })
  }, [size, quantity, selectedItem])

  const onSelectSize = (event) => {
    setSize(event.target.value)
  }
  const onOpenModal = () => {
    setSize("")
    setOpenModal((prev) => !prev)
  }

  const selectImage = (name) => {
    if (!name) return ""
    switch (name) {
      case "Cuflor": {
        return Cuflor
      }
      case "Grenar": {
        return Grenar
      }
      case "Gwendolyn": {
        return Gwendolyn
      }
      case "Jowi": {
        return Jowi
      }
      case "Lucuna": {
        return Lucuna
      }
      case "Zgren": {
        return Zgren
      }
      default: {
        return ""
      }
    }
  }
  return (
    <>
      {selectedItem && (
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
                    backgroundImage: `url(${selectImage(selectedItem.name)})`,
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
                      setItems((prev) => [...prev, { item }])
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
      )}
    </>
  )
}

export default ItemModal
