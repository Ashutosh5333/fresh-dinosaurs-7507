import React from "react";
import {
  Box,
  Text,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Select,
  Image,
  Spacer,
  VStack,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Box >
        <Text  position="fixed"
         w="full" bg="#202340" color="white">
          1st time customers save on SHOP.COM exclusive brands using code
          FIRST25OFF . Max $25 discount. Terms Apply.Click to copy coupon.{" "}
        </Text>
      </Box>
      <br/>
      {/* <br /> */}
      <Container
        maxW="full"
        // w="full"
        h="140px"
        bg="#f0f1f7"
        // border="1px solid gray"
        boxShadow='2xl' 
        position="fixed"
        zIndex="2"
        // bg="#fff"
      >
        <Box maxW="full"  w="auto">
          {/* ------------------- */}
          <Container maxW="6xl">
            <Flex>
              <Box mt="20px" ml="-24px">
                 <Image display="inline-block" width="175px"
                h="44px"   src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" />
              </Box>
              <Spacer />
              <Box
                color="black.500"
                borderWidth={1}
                m="auto"
                mt="20px"
                mb="20px"
                borderRadius="30px"

                boxShadow="lg"
                // w="60%"
                p={2}
                maxW="xl"
                bg="#fff"
             
                border="1px solid black"
              >
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <Box h="5" m="auto" >
                    <Select
                      border="none"
                      placeholder="All Departments"
                      textDecoration="none"
                      bg="#fff"
                      h="26px"
                    >
                      <option value="Sofware">Software</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Baby">Baby</option>
                      <option value="Hair">Hair</option>
                      <option value="Tshirt">Tshirt</option>
                      <option value="Trending">Trending</option>
                    </Select>
                  </Box> 
                  <Box w="170px" h="5" mb="10px"  >
                    <Input border="none" color="blackAlpha.400" placeholder="Search SHOP.COM......" />
                  </Box>
                </Grid> 
              </Box>
              <Spacer />
              <Box>
                <Image
                  float="right"
                  mt="30px"
                  mr="-20px"
                  src="https://img.shop.com/Image/header2013/usa-shopping-annuity-biotin-gummies-head-banner1664295986848.png"
                />
              </Box>
            </Flex>
          </Container>
          
          {/* -------------- */}
          <Spacer />
          <Container maxW="full" mb="40px">
            <Flex color="#202340" h="20px" m="auto" gap="20px" mb="20px">
              <Heading size="md"> Catagories</Heading>
              <Spacer />
              <HStack>
                <Link to="/"> HOME</Link>
                <Link to="/exclu">Exclusive Brands</Link>
                <Link to="/store">Stores</Link>
                <Link>Deals</Link>
                <Text>SHOP Travel</Text>
                <Link>Shop buddy</Link>
                <Text>Shop Local </Text>
              </HStack>
              <Spacer />
              <Flex ml="30px" w="200px">
                <HStack>
                  <Box w="30px">
                    <Link to="/sign">
                      <Image
                        w="40px"
                        src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg"
                      />
                    </Link>
                
                  </Box>
                  <Box w="30px">
                    <Image
                      w="40px"
                      src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg"
                    />
                    {/* <Text mt="-30px" >Orders</Text> */}
                  </Box>
                  <Box w="30px">
                    <Link to="/cart">
                      <Image
                        w="40px"
                        src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg"
                      />
                    </Link>

                    {/* <Text mt="-30px">Cart</Text> */}
                  </Box>
                </HStack>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/* ---------------- */}    
      </Container>
      <br />
  
      <Box  >
        <Flex  bg="#f0f1f7">
          <Box color="#202340" >
          Your Shop Consultant is SHOP.COM
          </Box>
          <Spacer />
          <Box  color="#202340">
          Earn up to 50%  Cashback on eligible purchases.
          </Box>
        </Flex>
      </Box>

    </>
  );
};

