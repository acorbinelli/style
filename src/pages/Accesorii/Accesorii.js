import { useState, useEffect } from "react"
import { Paper, Grid, Box, Typography, Button, Modal } from "@mui/material"
import ItemModal from "../ItemModal"
import Accesoriu from "./Accesoriu"
import accesorii from "../../mocks/accesorii"
import { maxHeight } from "@mui/system"

const Accesorii = () => {
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
    <Box>
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
            {accesorii.map((accesoriu) => (
              <Grid
                key={accesoriu.name}
                item
                xs={4}
                xl={4}
                display='flex'
                flexDirection='column'
                justifyContent='center'
              >
                <Accesoriu onClick={onItemClick} item={accesoriu} />
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
    </Box>
  )
}

export default Accesorii
