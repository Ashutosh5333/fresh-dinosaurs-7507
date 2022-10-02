import React from "react";
// import  "./Home.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Box, Container, Image, Link, Text} from "@chakra-ui/react"
import SwiperCore ,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y])

const data =[
    {
      id:1,
      image:"https://www.shop.com/feo-cdn/q/W/gwOZuHBJ0.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details"
    ,     price:"$59.95 "
    },
    {
      id:2,
      image:"https://img.shop.com/Image/240000/247900/247927/products/1943471593.jpg?plain&size=1600x1600",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details"
    ,     price:"$59.95 "
    },
    {
      id:3,
      image:"https://www.shop.com/feo-cdn/B/n/90vOMLyns.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details"
    ,     price:"$59.95 "
    },
    {
      id:4,
      image:"https://www.shop.com/feo-cdn/A/n/V-cTSXpyY.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details"
      ,     price:"$59.95 "
    },
    {
      id:5,
      image:"https://www.shop.com/feo-cdn/7/a/PtDidZj7Q.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details",
      price:"$59.95 "
        
    },
    {
      id:6,
      image:"https://www.shop.com/feo-cdn/A/n/V-cTSXpyY.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details"
     , price:"$59.95 "
    },
    {
      id:7,
      image:"https://www.shop.com/feo-cdn/B/n/90vOMLyns.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details",
      price:"$59.95 "
    },
    {
      id:8,
      image:"https://www.shop.com/feo-cdn/7/a/PtDidZj7Q.webp",
      title:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies", 
      solddes:"Sold by Shopping Annuity Necessities",
      ship:"Free shipping on orders $99 and up from Market America see details",
      price:"$59.95 "
    }


]


export const NewProduct = () => {
 return <>
   <Box  bg="#fff;" maxW="8xl" m="auto" h="600px" borderRadius="lg" overflow="hidden" boxShadow="lg">
    
    <Text fontSize={33} color="#202340">New Products</Text>

    <Box  w="6xl"  mt="58px" mb="58px" m="auto" > 
    <Swiper
      spaceBetween={2}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       { data.map(user => (
         <SwiperSlide key={user.id} >
          <Box >
           <Image  src={user.image} />
          </Box>
          <Text mb="28px" color="#202340" textAlign="left" >{user.title} </Text>
         </SwiperSlide>
       ))}
    </Swiper>
</Box>
       </Box>

 </>

};


