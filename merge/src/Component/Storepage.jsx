import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Skeleton,
  Spacer,
  Stack,
  Text,
  useStatStyles,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GET_PRODUCTS_SUCCESS } from "../AuthContext/action";
import { AppContext } from "../AuthContext/AuthContextProvider";

export const Storepage = () => {
  const [page, setPage] = useState(1);
  const { state, dispatch } = useContext(AppContext);

  // console.log(state.data);
  // console.log(cartstate)

  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?${page}&limit=20`
      )
      .then((res) => {
        dispatch({ ...GET_PRODUCTS_SUCCESS, payload: res.data.data });
        console.log(res);
      });
  }, []);

  return (
    <>
      <Box
        boxShadow="lg"
        rounded="md"
        bg="white"
        p={-1}
        mt="-30px"
        height={{
          base: "100%", // 0-48em
          md: "50%", // 48em-80em,
          xl: "25%", // 80em+
        }}
        // bg="teal.400"
        width={[
          "100%", // 0-30em
          "50%", // 30em-48em
          "25%", // 48em-62em
          "15%", // 62em+
        ]}
      />
      <Container
        maxW="8xl"
        h="auto"
        // border="1px solid black"
        // mt="20px"
        boxShadow="lg"
        p="6"
        rounded="md"
        bg="white"
        display="flex"
      >
        <Flex gap="20px">
          <Box h="auto" w="320px">
            <Flex display="-ms-flexbox" boxShadow="lg" rounded="md" bg="white">
              <Box textAlign="start" m="10px" color="#20230" fontWeight="bold">
                <Box>
                  <Text>About Us </Text>
                  <Box
                    color="#202340"
                    fontSize={14}
                    fontWeight="thin"
                    fontFamily="sans-serif"
                  >
                    <Text> About Us </Text>
                    <Text>
                      Non-commissionable items include: Subscription orders,
                      Gift Wrapping, Registry sign ups, Beyond+ memberships and
                      Gift Cards. * Deals apply to online purchases only and may
                      not apply to all purchases. Coupons and/or promotional
                      codes found outside of SHOP.COM, either from the retailer
                      or from a third party, may not be eligible for cashback on
                      SHOP.COM.
                    </Text>
                    <Text>Exclusive Brands </Text>
                    <Text>Executive Team </Text>
                    <Text>Careers </Text>
                    <Text> In the News</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box h="auto" w="full">
            <Text
              fontSize={22}
              mr="-120px"
              mb="10px"
              color="#202340"
              float="left"
              fontWeight="bold"
            >
              Our Brands
            </Text>
            <Spacer />
            <Text
              mt="20px"
              mr="-20px"
              fontSize={32}
              color="#202340"
              float="left"
            >
              Beyond
            </Text>

            <Box mt="80px" h="100px" w="5xl" >
              <Box>
                <Text
                  color="#202340"
                  justifyContent="start"
                  fontSize={25}
                  fontWeight="bold"
        
                >
                  Bed Bath & Beyond Deals and Information{" "}
                </Text>
              </Box>
              <Box
               color="#202340"
                  justifyContent="start"
                  fontSize={25}
                  fontWeight="bold">
                <Text>Hot Deals </Text>
              </Box>
        
            </Box>

            {/* ------ Products ------- */}
            <Box h="auto" w="5xl" >
              <Container
                maxW={{ base: "full", md: "Container.xl" }}
                p={{ base: 2, lg: 0 }}
              >
                <Grid
                  w="full"
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                  }}
                  gap={4}
                >
                  {state.data.map((item) => {
                    return (
                      <SimpleGrid key={item.id}>
                        <Box
                          bg="white.100"
                          columns={{ sm: 2, md: 4 }}
                          spacing="5"
                          p={1}
                          textAlign="center"
                          rounded="lg"
                          color="black.400"
                          borderWidth={1}
                          marginleft="10px"
                          justifyContent="center"
                          borderRadius="lg"
                          overflow="hidden"
                          boxShadow="lg"
                        >
                          <VStack>
                            <Box>
                              <Image src={item.image} alt="prod-img" />
                            </Box>
                            <Box>
                              <Text>{item.title} </Text>
                            </Box>
                            <Box>
                              <Text> {item.price} </Text>
                            </Box>
                            <Button>add_to_cart</Button>
                          </VStack>
                        </Box>
                      </SimpleGrid>
                    );
                  })}
                </Grid>
              </Container>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
