import React from "react"
import {
  Grid,
  Box,
  ThemeProvider,
  CssBaseline,
  Card,
  Typography,
  Button,
} from "@mui/material"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import SwiperCore, { Autoplay } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"
import ImageOne from "../../images/acasa/acasaCarousel/1.png"
import ImageTwo from "../../images/acasa/acasaCarousel/2.png"
import ImageThree from "../../images/acasa/acasaCarousel/3.png"
import ImageFour from "../../images/acasa/acasaCarousel/4.png"
import Prod1 from "../../images/acasa/prod1.jpg"
import Prod2 from "../../images/acasa/prod2.jpg"
import Prod3 from "../../images/acasa/prod3.jpg"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { PINK_DARK, PINK_LIGHT } from "../../theme"

const HomePage = () => {
  SwiperCore.use([Autoplay])
  return (
    <Box
      sx={{
        "& .swiper-pagination-horizontal": {
          position: "absolute",
          bottom: "5%",
          width: "100%",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          position: "relative",
          paddingBottom: "3rem",
          width: 700,
        }}
      >
        <SwiperSlide>
          <img src={ImageOne} alt='one' style={{ width: 340 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageTwo} alt='one' style={{ width: 340 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageThree} alt='one' style={{ width: 340 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageFour} alt='one' style={{ width: 345 }} />
        </SwiperSlide>
      </Swiper>
      <Box display='flex' justifyContent='center'>
        <Card
          variant='elevation'
          elevation={3}
          sx={{
            mx: 4,
            p: 2,
            width: (theme) => theme.spacing(25),
            display: "flex",
            flexDirection: "column",
            "&:hover": { color: "white", background: PINK_LIGHT },
          }}
          component={Button}
        >
          <Box
            sx={{
              width: (theme) => theme.spacing(20),
              height: (theme) => theme.spacing(25),
              backgroundImage: `url(${Prod2})`,
              backgroundSize: "cover",
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Segoe Print",
              fontSize: 10,
              fontWeight: 600,
              mt: 1,
            }}
          >
            Reducere 10% pentru studenti
          </Typography>
        </Card>
        <Card
          variant='elevation'
          elevation={3}
          sx={{
            mx: 4,
            p: 2,
            width: (theme) => theme.spacing(25),
            display: "flex",
            flexDirection: "column",
            "&:hover": { color: "white", background: PINK_LIGHT },
          }}
          component={Button}
        >
          <Box
            sx={{
              width: (theme) => theme.spacing(20),
              height: (theme) => theme.spacing(25),
              backgroundImage: `url(${Prod1})`,
              backgroundSize: "cover",
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Segoe Print",
              fontSize: 10,
              fontWeight: 600,
              mt: 1,
            }}
          >
            Articole noi adaugate
          </Typography>
        </Card>
        <Card
          variant='elevation'
          elevation={3}
          sx={{
            mx: 4,
            p: 2,
            width: (theme) => theme.spacing(25),
            display: "flex",
            flexDirection: "column",
            "&:hover": { color: "white", background: PINK_LIGHT },
          }}
          component={Button}
        >
          <Box
            sx={{
              width: (theme) => theme.spacing(20),
              height: (theme) => theme.spacing(25),
              backgroundImage: `url(${Prod3})`,
              backgroundSize: "cover",
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Segoe Print",
              fontSize: 10,
              fontWeight: 600,
              mt: 1,
            }}
          >
            Reducere la bluze
          </Typography>
        </Card>
      </Box>
    </Box>
  )
}

export default HomePage
