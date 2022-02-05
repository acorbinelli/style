import { useState } from "react"
import { Paper, Grid, Box, Typography, Button, Modal } from "@mui/material"
import ItemModal from "../../ItemModal"
import Pantalon from "./Pantalon"
import rochii from "../../../mocks/pantaloni"

const Pantaloni = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

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
            {rochii.map((pantalon) => (
              <Grid
                key={pantalon.name}
                item
                xs={4}
                xl={4}
                display='flex'
                flexDirection='column'
                justifyContent='center'
              >
                <Pantalon onClick={onItemClick} item={pantalon} />
              </Grid>
            ))}
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

export default Pantaloni
