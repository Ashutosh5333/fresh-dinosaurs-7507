import React from "react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Badge, Box, Container, Icon, Image, Link, Text} from "@chakra-ui/react"
import SwiperCore ,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y])

const data =[
    {
      id:1,
      image:"https://www.shop.com/feo-cdn/w/6/gQB1wqdu0.webp",
      title:"TLS® Green Coffee Plus Garcinia Cambogia", 
      solddes:"Sold by TLS",
        price:"$59.95 "
    },
    {
      id:2,
      image:"https://www.shop.com/feo-cdn/F/2/9ZFjFm8gA.webp",
      title:"TLS® Green Coffee Plus Garcinia Cambogia", 
      solddes:"Sold by TLS",
      price:"$59.95 "
    },
    {
      id:3,
      image:"https://www.shop.com/feo-cdn/O/n/CFIUBu6Rg.webp",
      title:"TLS® Green Coffee Plus Garcinia Cambogia", 
      solddes:"Sold by TLS",
      price:"$59.95 "
    },
    {
      id:4,
      image:"https://www.shop.com/feo-cdn/k/L/eg2-kSSRM.webp",
      title:"TLS® Green Coffee Plus Garcinia Cambogia", 
      solddes:"Sold by TLS",
      price:"$59.95 "
    },
    {
      id:5,
      image:"https://www.shop.com/feo-cdn/f/1/FFQnja9Wk.webp",
      title:"TLS® Green Coffee Plus Garcinia Cambogia", 
      solddes:"Sold by TLS",
      price:"$59.95 "
        
    },

]


export const Stayhealty = () => {
 return <>   
     <Container maxW="8xl" mt="40px"  boxShadow="lg" borderRadius='lg' m="auto" > 
     <Text     fontfamily="oswald, serif"
     fontWeight="bold" fontSize={33} color="#202340">Stay Healthy with Essential 9!</Text>

   <Box  display="flex" bg="#fff;" maxW="8xl" m="auto"  gap="40px"  borderRadius="lg"  boxShadow="lg">

   <Box h="400px" w="800px"  > 
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


    {/* ------- */}
     <Box h="400px" w="400px"  > 
     
       <Image w="400px" h="400px" src="https://www.shop.com/feo-cdn/R/6/82qF16RP4.webp"/>
      </Box>

   
{/* -------------- */}
       </Box>
{/* ------------------------- */}

</Container>
  


 </>

};


