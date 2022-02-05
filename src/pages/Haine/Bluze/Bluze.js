import { useState } from "react"
import { Paper, Grid, Box } from "@mui/material"
import ItemModal from "../../ItemModal"
import Bluza from "./Bluza"
import bluze from "../../../mocks/bluze"

const Bluze = () => {
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
            {bluze.map((bluza, index) => (
              <Grid
                key={bluza.name}
                item
                xs={4}
                xl={4}
                display='flex'
                flexDirection='column'
                justifyContent='center'
              >
                <Bluza onClick={onItemClick} item={bluza} />
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

export default Bluze
