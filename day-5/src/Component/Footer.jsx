import {
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
        id:1,
      image: "https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp",
    },
    {
      id:2,
      image: "https://www.shop.com/feo-cdn/B/L/K5pf_0c94.webp",
    },
    {
      id:3,
      image: "https://www.shop.com/feo-cdn/m/S/eK8gl_JjY.webp",
    },
    {
      id:4,
      image: "https://www.shop.com/feo-cdn/0/q/U9W4qM8Kw.webp",
    },
    {
      id:5,
      image: "https://www.shop.com/feo-cdn/o/0/XUDdhleMQ.webp",
    },
    {
      id:6,
      image: "https://www.shop.com/feo-cdn/N/z/XfD9Uvd_o.webp",
    },
    {
      id:7,
      image: "https://www.shop.com/feo-cdn/K/F/E44Pe49Qs.webp",
    },
    {
      id:8,
      image: "https://www.shop.com/feo-cdn/l/G/2hIWtS-fA.webp",
    },
  ];
  
  export const Footer = () => {
    return (
      <Box maxW="full"  gap={10} mb="10px">
        
          <Box w="full" mt="28px"  bg="#545871" h="100px" fontWeight="bold">
            <Flex>
              <Box w="270px" h="10" mt="8px" fontSize={12}>
                <Text color="#fff"> Get Email Deals & Earn Cashback </Text>
              </Box>
              <Spacer />
              <Box w="220px" h="7" bg="#fff" ml="-70px" fontWeight="medium" mt="18px" justifyContent="space-between">
                <Text >
                  enter email address.....  
                </Text>
              </Box>
              <Spacer />
              <Box w="300px" h="10"  mt="8px">
                <Text color="#fff" fontSize={12} >
                  Link To This Page & Tell All Your Friends!
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text  fontSize={12} color="#fff" float="left" mt="8px">
                {" "}
                About Us | Help | Accessibility | Statement | Contact Us | Partner
                | With Us | Services | Country/Region  | Own Your Own
                SHOP Site
              </Text>
            </Box>
          </Box>
          {/* -------------- */}
  
          <Box w="full" h="80px"  bg="#f0f1f7" >
            <Box float="left" mt="8px" gap="28px">
              <Text fontSize={10} mb="4px" color="#202340">
                © 1997-2022 Market America, Inc. or its affiliates. All other
                designated trademarks, copyrights, and brands are the property of
                their respective owners.{" "}
              </Text>
              <Text fontSize={10} mb="4px" color="#202340">
                Only Customers will receive cashback on qualifying purchases.
                UnFranchise Owners/Shop Consultants will receive increased IBV
                instead of cashback{" "}
              </Text>
              <Text fontSize={14} mb="8px" fontWeight="bold" color="#202340">
                Privacy Policy | Terms of Use | Advertising Disclosure | Return
                Policy | Shipping Information{" "}
              </Text>
            </Box>
          </Box>
  
  {/* ---------------------------- */}
  
          <Box w="full" h="100px" bg="#f0f1f7">
            <Container maxW="2xl" 
            p={2}
            gap="10px"
            >
              <Grid
                w="full"
                templateColumns={{
                  base: "repeat(8,1fr)",
                  md: "repeat(8,1fr)",
                  lg: "repeat(8,1fr)",
                }}
              >
                {data.map((item) => {
                  return (
                    <SimpleGrid key={item.id}>
                      <Box
                        bg="white.100"
                        spacing="10"
                    p={1}
                        // textAlign="center"
                      >
                        <Box >
                          <Image   gap="10px" width="100px" src={item.image} />
                        </Box>
                      </Box>
                    </SimpleGrid>
                  );
                })}    
              </Grid>
          
            </Container>
          </Box>
    
       </Box>
    )
    
  
  };
  