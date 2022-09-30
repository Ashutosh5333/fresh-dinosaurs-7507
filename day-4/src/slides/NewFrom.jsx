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
      image:"https://www.shop.com/feo-cdn/9/N/6w7SnOjhk.webp",
      title:"Motives® X Amber Essential Collection", 
      solddes:"Sold by Motives® Cosmetics",
        price:"$59.95 "
    },
    {
      id:2,
      image:"https://www.shop.com/feo-cdn/2/P/c_nL08pSU.webp",
        title:"Motives® X Amber Essential Collection", 
      solddes:"Sold by Shopping Annuity Necessities",
      price:"$59.95 "
    },
    {
      id:3,
      image:"https://www.shop.com/feo-cdn/P/h/sfWYV9OoM.webp",
        title:"Motives® X Amber Essential Collection", 
      solddes:"Sold by Shopping Annuity Necessities",
      price:"$59.95 "
    },
    {
      id:4,
      image:"https://www.shop.com/feo-cdn/I/L/_eZgaY-e8.webp",
      title:"Motives® X Amber Essential Collection",  
      solddes:"Sold by Shopping Annuity Necessities",
      price:"$59.95 "
    },
    {
      id:5,
      image:"https://www.shop.com/feo-cdn/v/O/MT-blwReI.webp",
      title:"Motives® X Amber Essential Collection",  
      solddes:"Sold by Shopping Annuity Necessities",
      price:"$59.95 "
        
    },
  

]


export const NewForm = () => {
 return <>   
     <Container maxW="8xl" borderWidth='1px' boxShadow="lg" borderRadius='lg' > 
    <Text     fontfamily="oswald, serif"
     fontWeight="bold" fontSize={33} color="#202340">New from Motives</Text>

   <Box  display="flex" bg="#fff;" maxW="8xl" m="auto" ml="20px"  gap="40px"  borderRadius="lg"  boxShadow="lg">
    
     <Box h="400px" w="400px"  > 
     
       <Image w="full" h="400px" src="https://www.shop.com/feo-cdn/T/e/cAaLYtdsA.webp"/>
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


