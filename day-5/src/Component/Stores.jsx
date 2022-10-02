import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const data = [
  {
    image: "https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/B/L/K5pf_0c94.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/m/S/eK8gl_JjY.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/0/q/U9W4qM8Kw.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/o/0/XUDdhleMQ.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/N/z/XfD9Uvd_o.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/K/F/E44Pe49Qs.webp",
  },
  {
    image: "https://www.shop.com/feo-cdn/l/G/2hIWtS-fA.webp",
  },
];

export const Stores = () => {
  return (
    <Box
      h="3xl"
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
      // border="1px solid black"
      maxW="8xl"
    >


      <Box
        // border="1px solid red"
        // h="55px"
        display="flex"
        gap="10px"
        m="10px"
        fontSize={22}
        color="#202340"
        maxW="2xl"
      >
        <Box boxShadow="xl" p="2" rounded="md" bg="white">
          <Text> Featured </Text>
        </Box>
        <Box boxShadow="xl" p="2" rounded="md" bg="white">
          <Text> Favotites </Text>
        </Box>
        <Box boxShadow="xl" p="2" rounded="md" bg="white">
          <Text> All Stores </Text>
        </Box>
        <Box boxShadow="xl" p="2" rounded="md" bg="white">
          <Text> Deals </Text>
        </Box>
        <Box boxShadow="xl" p="2" rounded="md" bg="white">
          <Text> ShopLocal </Text>
        </Box>
      </Box>

      {/* --------------------------- */}

      <Box
        mt="55px"
        // border="1px solid red"
        h="55px"
        display="flex"
        gap="10px"
        // m="10px"
        m="auto"
      textAlign="center"
        fontSize={22}
        color="#202340"
      >
        <Text fontSize={22} color="#202340"  float="left">
          Featured 
        </Text>

        <Container m="auto"  gap="20px" maxW="8xl" mr="50px" mt="55px" display="flex">

          <Box  h="auto" maxW="auto" boxShadow='2xl' p='6' rounded='md' bg='white'>
            <Text>Bed Bath & Beyond</Text>
            <Box display="flex" justifyContent="space-between">
              <Image src="https://img.shop.com/Image/featuredstore/ca_eng_bedbathandbeyond_cuisinart_hd_mp-14316_dec181549553338902.jpg" />
              <Button bg="#203040" color="#fff" p="6" mt="30px">
                SHOP NOW
              </Button>
            </Box>
            <Text fontSize={14} color="#203040">
              One of the largest selections of products for your home anywhere,
              at everyday low prices!
            </Text>
           
          </Box>

          <Box   h="auto" maxW="auto"  boxShadow='2xl' p='6' rounded='md' bg='white'>
            <Text>Eleven Moves</Text>
            <Box display="flex" justifyContent="space-between">
              <Image src="https://img.shop.com/Image/featuredstore/ellenmoves1617140728088.jpg" />
              <Button bg="#203040" color="#fff" p="6" mt="30px">
                SHOP NOW
              </Button>
            </Box>
            <Text fontSize={14} color="#203040">
            Innovative yoga mats created through a combination of art, technology, and spirituality. Made for your yoga practices and
            </Text>
           
          </Box>

          <Box  h="auto" maxW="auto"  boxShadow='2xl' p='6' rounded='md' bg='white'>
            <Text>Blair Tech</Text>
            <Box display="flex" justifyContent="space-between">
              <Image src="https://img.shop.com/Image/featuredstore/us-en-blairtech-featuredstore-fillin-oct201602867043361.jpg" />
              <Button bg="#203040" color="#fff" p="6" mt="30px">
                SHOP NOW
              </Button>
            </Box>
            <Text fontSize={14} color="#203040">
              One of the largest selections of products for your home anywhere,
              at everyday low prices!
            </Text>
           
          </Box>
        
        </Container>

      </Box>

     </Box>
  
  );
};
