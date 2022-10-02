import React from "react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';
import {Badge, Box, Container, Icon, Image, Link, Text} from "@chakra-ui/react"
import SwiperCore ,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y])

const data =[
    {
      id:1,
      image:"https://www.shop.com/feo-cdn/w/6/gQB1wqdu0.webp",
      title:"Isotonix OPC-5", 
      solddes:"Sold by TLS",
        price:"$59.95 "
    },
    {
      id:2,
      image:"https://img.shop.com/Image/210000/214100/214196/products/935461732.jpg?plain&size=600x600",
      title:"Isotonix OPC-5 Essentials", 
      solddes:"Sold by TLS",
      price:"$59.95 "
    },
    {
      id:3,
      image:"https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=600x600",
      title:"Isotonix OPC-5 Essentials",    solddes:"Sold by TLS",
      price:"$59.95 "
    },
    {
      id:4,
      image:"https://img.shop.com/Image/210000/214100/214196/products/561800354.jpg?plain&size=600x600",
      title:"Isotonix OPC-5 Essentials", 
      solddes:"Sold by TLS",
      price:"$59.95 "
    },
    {
      id:5,
      image:"https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=600x600",
      title:"Isotonix OPC-5 Essentials", 
      solddes:"Sold by TLS",
      price:"$59.95 "
        
    },

]


export const TopSeller = () => {
 return <>   
   
     <Text fontfamily="oswald, serif"
     fontWeight="bold" fontSize={33} color="#202340">Stay Healthy with Essential 9!</Text>

   <Box  display="flex" bg="#fff;" maxW="8xl" m="auto"   borderRadius="lg"  boxShadow="lg">

       { data.map(user => (
         <Box key={user.id} >
          <Box >
           <Image  src={user.image} />
          </Box>
          <Text mb="28px" color="#202340" textAlign="left" >{user.title} </Text>
         </Box>
       ))}
  
     
{/* -------------- */}
       </Box>



  


 </>

};


