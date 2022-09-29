import React from 'react'
import { Badge, Box, Button, Container, DarkMode, extendTheme, Grid, HStack, Icon, Image, LightMode, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react'
import { NewProduct } from '../slides/Newproduct'
import { FallHaves } from '../slides/Fall'


export const Home = () => {
  
  return (
    <>  
    <Box   fontSize={22} color="#202340">
             <VStack> 
               <Text>$50,008,362 </Text>
               <Text>awarded in Cashback! </Text>
             </VStack>
           </Box>
           <Box>
             <Image h="250px" w="100%" src="https://www.shop.com/feo-cdn/x/m/euKWS6-m8.jpg"/>
           </Box>
      <Spacer />
{/* ------------- */}
    <Container m="auto" gap="20px"  maxW="full" mt="20px" display="flex" > 
      <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          <Text>Axis Nutrition™ Mental Emotional Balance</Text>
        </Box>
        <Image w="600px" src="https://img.shop.com/Image/290000/292900/292917/products/1944540428.jpg?plain&size=300x300" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          <Text>Dr. Deedra Mason's Essential 9</Text>
        </Box>
        <Image src="https://img.shop.com/Image/homepage/us_eng_essential9_sq1616511735959.jpg" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          <Text>Featured OneCart Stores</Text>
        </Box>
        <Image src="https://www.shop.com/feo-cdn/Q/S/gYyQJsTec.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          <Text>Sign in for the best experience</Text>
        </Box>
        <Image src="https://img.shop.com/Image/homepage/sa-usa-103715-pain-relief-spray-preorder-600x600-img1663769923041.jpg" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
  </Container>

  <Container maxW="full" > 

<Box  p={4} display={{ md: 'flex' }} >
<Box flexShrink={0}>
  <Image
    borderRadius='lg'
    width={{ md: 80 }}
    src='https://www.shop.com/feo-cdn/c/I/WlEfcvxJ4.jpg'
    alt='Woman paying for a purchase'
  />
</Box>
<Box boxShadow="md" gap="21px" h="110px" w="150px" mt={{ base: 4, md: 8 }} ml={{ md: 6 }}>
  <Image
    borderRadius='lg'
    width={{ md: 40 }}
    src='https://www.shop.com/feo-cdn/A/p/ONaGbc0Sw.webp'
    alt='Woman paying for a purchase'
  />
</Box>
<Box boxShadow="md" h="110px" w="150px" mt={{ base: 4, md: 8 }} ml={{ md: 6 }}>
  <Image
    borderRadius='lg'
    width={{ md: 40 }}
    src='https://www.shop.com/feo-cdn/W/F/MSQneTOF8.webp'
    alt='Woman paying for a purchase'
  />
</Box>
<Box boxShadow="md" h="110px" w="150px" mt={{ base: 4, md: 8 }} ml={{ md: 6 }}>
  <Image
    borderRadius='lg'
    width={{ md: 40 }}
    src='https://www.shop.com/feo-cdn/4/-/QbRxpj9dU.webp'
    alt='Woman paying for a purchase'
  />
</Box>
<Box boxShadow="md" h="110px" w="150px" mt={{ base: 4, md: 8 }} ml={{ md: 6 }}>
  <Image
    borderRadius='lg'
    width={{ md: 40 }}
    src='https://www.shop.com/feo-cdn/x/i/LjOPCGiU4.webp'
    alt='Woman paying for a purchase'
  />
</Box>
<Box boxShadow="md" h="110px" w="150px" mt={{ base: 4, md: 8 }} ml={{ md: 6 }}>
  <Image
    borderRadius='lg'
    width={{ md: 40 }}
    src='https://www.shop.com/feo-cdn/Y/K/Ba4Gsx3yk.webp'
    alt='Woman paying for a purchase'
  />
</Box>

</Box>

{/* ------------- */}
</Container>

<NewProduct />
  
{/* ------------- */}

<Container m="auto" gap="20px"  maxW="full" mt="20px" display="flex" > 
      <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
        </Box>
        <Image  src="https://www.shop.com/feo-cdn/7/l/-fGfB68PY.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340">
          2%  Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
    
        </Box>
        <Image src="https://www.shop.com/feo-cdn/Z/x/MFnxrxhH8.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340" >
          2% Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
      
        </Box>
        <Image src="https://www.shop.com/feo-cdn/2/M/snAE2k3Ps.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340">
          2% Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
      
        </Box>
        <Image src="https://www.shop.com/feo-cdn/p/Q/AhLxi12oQ.jpg" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340" >
          2% Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
  </Container>

   <FallHaves />
{/* ----------------- */}

<Container m="auto" gap="20px"  maxW="full" mt="20px" display="flex" > 
      <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
        </Box>
        <Image  src="https://www.shop.com/feo-cdn/F/F/GL9yfIwig.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340">
          2%  Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
    
        </Box>
        <Image src="https://img.shop.com/Image/homepage/us-hp-plt1664222559212.gif" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340" >
          2% Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
      
        </Box>
        <Image src="https://www.shop.com/feo-cdn/V/0/Wyw5cG5yQ.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340">
          2% Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
    <Box maxW='sm' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
      
        </Box>
        <Image src="https://www.shop.com/feo-cdn/o/-/COpvs35ek.webp" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color="#202340" >
          2% Cashback
          </Badge>
        </Box>
      </Box>
    </Box>
    {/* -------------- */}
  </Container>



    </>

  )


}

/*  <Container  >
           
        <Grid   w="full"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={4}
 >
                    
       <SimpleGrid>
          <Box>
               <VStack>
                 <Box>
                    <Text>Axis Nutrition™ Mental Emotional Balance</Text>
                     <Image src="https://img.shop.com/Image/290000/292900/292917/products/1944540428.jpg?plain&size=300x300" />
                 </Box>
                 <Box>
                    <Text>Axis Nutrition™ Mental Emotional Balance</Text>
                     <Image src="https://img.shop.com/Image/290000/292900/292917/products/1944540428.jpg?plain&size=300x300" />
                 </Box>
                 <Box>
                    <Text>Axis Nutrition™ Mental Emotional Balance</Text>
                     <Image src="https://img.shop.com/Image/290000/292900/292917/products/1944540428.jpg?plain&size=300x300" />
                 </Box>
                 <Box>
                    <Text>Axis Nutrition™ Mental Emotional Balance</Text>
                     <Image src="https://img.shop.com/Image/290000/292900/292917/products/1944540428.jpg?plain&size=300x300" />
                 </Box>
           </VStack>
           </Box>
</SimpleGrid>
</Grid>
  

    </Container> */
