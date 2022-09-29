import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'


const data =[
  {
    id:5,
    image:"https://www.shop.com/feo-cdn/u/u/PuwcqKsss.webp",
    title:"WOMEN'S SWEATERS"
  },
  {
    id:5,
    image:"https://www.shop.com/feo-cdn/M/Q/pb_1UnmK8.webp",
    title:"SCARVES"
  },
  {
    id:5,
    image:"https://www.shop.com/feo-cdn/6/d/3_YMkXXo8.webp",
    title:"WOMEN'S JEANS"
  },
  {
    id:5,
    image:"https://www.shop.com/feo-cdn/U/y/4oXs0zawk.webp",
    title:"WOMEN'S BOOTS"
  },
  {
    id:5,
    image:"https://www.shop.com/feo-cdn/E/e/UAkYvmwEY.webp",
    title:"BAGS AND TOTES"
  },
  {
    id:5,
    image:"https://www.shop.com/feo-cdn/i/-/zWneLwnlw.webp",
    title:"PUMPIKIN SPICE"
  }
]

export const Exclusive = () => {
  return (
    <Box border="1px solid blue" bg="#fff;" maxW="8xl"  borderRadius="lg" overflow="hidden" boxShadow="lg">
    <Text fontSize={33} textShadow=" 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff" font-weight="700" color="#2e2c38">Fall Must-Haves</Text>

    <Box mt="58px" mb="58px" display="flex" spacing="2"
                textAlign="center"
                color="black.500"
               > 
        {
          data.map(user=> (
           <Box  borderRadius="50px"   boxShadow='2xl' p='6' rounded='lg'  overflow="hidden" key={user.id}>
             <Image src={user.image} />
             <Text  fontWeight="bold" color="#202340">{user.title}</Text>
            </Box>
          
        ))}
    </Box>
      
    
 </Box>   
  )
}
