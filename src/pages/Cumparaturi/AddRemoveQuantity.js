import { Box, IconButton } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useShoppingContext } from "../../context/ShoppingContext"

const AddRemoveQuantity = ({ item }) => {
  const { onRemoveItem, onIncrementItem } = useShoppingContext()

  return (
    <Box display='flex'>
      <IconButton
        onClick={() => onRemoveItem(item)}
        variant='contained'
        size='small'
        sx={{
          mt: 1,
          mr: 2,
        }}
      >
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={() => onIncrementItem(item)}
        variant='contained'
        size='small'
        sx={{
          mt: 1,
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  )
}

export default AddRemoveQuantity
