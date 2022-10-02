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
      image:"https://www.shop.com/feo-cdn/o/p/hvcV4c3Ec.webp",
      title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
        price:"$59.95 "
    },
    {
      id:2,
      image:"https://www.shop.com/feo-cdn/0/H/4WwNB-m_o.webp",
      title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
      price:"$59.95 "
    },
    {
      id:3,
      image:"https://www.shop.com/feo-cdn/G/o/GikJDZ8zk.webp",
      title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
      price:"$59.95 "
    },
    {
      id:4,
      image:"https://www.shop.com/feo-cdn/Z/0/frkGwoR9Q.webp",
      title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
      price:"$59.95 "
    },
    {
      id:5,
      image:"https://www.shop.com/feo-cdn/L/w/Wos-qlV5M.webp",
      title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
      price:"$59.95 "
        
    },
    {
        id:6,
        image:"https://www.shop.com/feo-cdn/p/A/S3xqvwH-w.webp",
        title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
        price:"$59.95 "
      },
      {
        id:7,
        image:"https://www.shop.com/feo-cdn/Y/V/GNuS2-E3A.webp",
        title:"SELENA – Pave Cuban Link Chain", 
      solddes:"Sold by Layered",
        price:"$59.95 "
          
      },
  

]


export const LayerdForm = () => {
 return <>   
     <Container maxW="8xl" borderWidth='1px' boxShadow="lg" borderRadius='lg' > 
    <Text     fontfamily="oswald, serif"
     fontWeight="bold" fontSize={33} color="#202340">New LayerdForm</Text>

   <Box  display="flex" bg="#fff;" maxW="8xl" m="auto" ml="20px"  gap="40px"  borderRadius="lg"  boxShadow="lg">
    
     <Box h="400px" w="400px"  > 
     
       <Image w="400px" h="400px" src="https://www.shop.com/feo-cdn/Z/m/q3qYg9U0Y.webp"/>
      </Box>

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

{/* -------------- */}
       </Box>
{/* ------------------------- */}

</Container>
  


 </>

};


