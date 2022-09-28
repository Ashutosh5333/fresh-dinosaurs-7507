import React from 'react'
import { Box, Button, Container, DarkMode, extendTheme, HStack, Image, LightMode, Text, VStack } from '@chakra-ui/react'
export const Home = () => {

  // const { useColorMode, toggleColorMode } = useColorMode()

  return (
    <Container   maxW="full" w="full" bg="#f0f1f7" border="1px solid black" >
           <Box    fontSize={22} color="#202340" >
             <VStack> 
               <Text>$50,008,362 </Text>
               <Text>awarded in Cashback! </Text>
             </VStack>
           </Box>
           <Box>
             <Image src="https://www.shop.com/feo-cdn/x/m/euKWS6-m8.jpg"/>
           </Box>
    </Container>
  )

}
