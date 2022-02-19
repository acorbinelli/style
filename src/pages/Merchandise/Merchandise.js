import { useState } from "react"
import { Paper, Grid, Box } from "@mui/material"
import { useShoppingContext } from "../../context/ShoppingContext"
import ItemModal from "../ItemModal"
import Item from "./components/Item"
import merchandise from "../../storeConfig/merchandise"

const Merchandise = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const { selectedCategory } = useShoppingContext()

  const onItemClick = (item) => {
    setSelectedItem(item)
    setOpenModal(true)
  }

  const onOpenModal = () => {
    setOpenModal((prev) => !prev)
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            p: 3,
            maxHeight: (theme) => theme.spacing(85),
            overflowY: "auto",
          }}
        >
          <Grid container spacing={5}>
            {merchandise.map((item, index) => {
              if (item.category === selectedCategory) {
                return (
                  <Grid
                    key={index}
                    item
                    xs={4}
                    xl={4}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                  >
                    <Item onClick={onItemClick} item={item} />
                  </Grid>
                )
              }
              return null
            })}
          </Grid>
        </Paper>
      </Box>
      <ItemModal
        openModal={openModal}
        setOpenModal={onOpenModal}
        selectedItem={selectedItem}
      />
    </>
  )
}

export default Merchandise
