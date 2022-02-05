import React from "react"
import { Box, Paper } from "@mui/material"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import SwiperCore, { Autoplay } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"
import ImageOne from "../../images/acasa/acasaCarousel/1.png"
import ImageTwo from "../../images/acasa/acasaCarousel/2.png"
import ImageThree from "../../images/acasa/acasaCarousel/3.png"
import ImageFour from "../../images/acasa/acasaCarousel/4.png"
import CardSection from "./CardSection"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const HomePage = () => {
  SwiperCore.use([Autoplay])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          pb: 0,
          mb: 2,
          position: "relative",
          "& .swiper-pagination-horizontal": {
            position: "absolute",
            bottom: "0%",
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
          style={{
            position: "relative",
            width: 700,
            paddingBottom: 20,
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
      </Paper>
      <CardSection />
    </Box>
  )
}

export default HomePage
