import { useState } from "react"

import Cuflor from "../../../images/bluze/Cuflor.jpg"
import Grenar from "../../../images/bluze/Grenar.jpg"
import Gwendolyn from "../../../images/bluze/Gwendolyn.jpg"
import Jowi from "../../../images/bluze/Jowi.jpg"
import Lucuna from "../../../images/bluze/Lucuna.jpg"
import Zgren from "../../../images/bluze/Zgren.jpg"
import { Paper, Grid, Box, Typography, Button, Modal } from "@mui/material"
import { PINK_LIGHTEST } from "../../../theme"
import ItemModal from "../ItemModal"

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

  const selectImage = (name) => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={4}
              xl={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Box
                component={Button}
                onClick={() => onItemClick({ name: "Cuflor", price: 99 })}
                sx={{
                  "&:hover": { color: PINK_LIGHTEST },
                  width: "100%",
                  height: (theme) => theme.spacing(30),
                  backgroundImage: `url(${Cuflor})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  mb: 1,
                }}
              />
              <Typography
                sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
              >
                Cuflor - (pret){" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              xl={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Box
                component={Button}
                onClick={() => onItemClick({ name: "Grenar", price: 99 })}
                sx={{
                  "&:hover": { color: PINK_LIGHTEST },
                  width: "100%",
                  height: (theme) => theme.spacing(30),
                  backgroundImage: `url(${Grenar})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  mb: 1,
                }}
              />
              <Typography
                sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
              >
                Grenar - (pret)
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              xl={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Box
                component={Button}
                onClick={() => onItemClick({ name: "Gwendolyn", price: 99 })}
                sx={{
                  "&:hover": { color: PINK_LIGHTEST },
                  width: "100%",
                  height: (theme) => theme.spacing(30),
                  backgroundImage: `url(${Gwendolyn})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  mb: 1,
                }}
              />
              <Typography
                sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
              >
                Gwendolyn - (pret)
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              xl={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Box
                component={Button}
                onClick={() => onItemClick({ name: "Jowi", price: 99 })}
                sx={{
                  "&:hover": { color: PINK_LIGHTEST },
                  width: "100%",
                  height: (theme) => theme.spacing(30),
                  backgroundImage: `url(${Jowi})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  mb: 1,
                }}
              />
              <Typography
                sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
              >
                Jowi - (pret)
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              xl={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Box
                component={Button}
                onClick={() => onItemClick({ name: "Lucuna", price: 99 })}
                sx={{
                  "&:hover": { color: PINK_LIGHTEST },
                  width: "100%",
                  height: (theme) => theme.spacing(30),
                  backgroundImage: `url(${Lucuna})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  mb: 1,
                }}
              />
              <Typography
                sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
              >
                Lucuna - (pret)
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              xl={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Box
                component={Button}
                onClick={() => onItemClick({ name: "Zgren", price: 99 })}
                sx={{
                  "&:hover": { color: PINK_LIGHTEST },
                  width: "100%",
                  height: (theme) => theme.spacing(30),
                  backgroundImage: `url(${Zgren})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  mb: 1,
                }}
              />
              <Typography
                sx={{ fontFamily: "Segoe Print", textAlign: "center" }}
              >
                Zgren - (pret)
              </Typography>
            </Grid>
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
