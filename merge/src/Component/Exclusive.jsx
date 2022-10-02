import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// import styles from "../Component/"

const data = [
  {
    id: 1,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/isotonix-us-au-gb-hk-sg-logo.svg",
  },
  {
    id: 2,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/prime-usca-hk-logo.svg",
  },
  {
    id: 3,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/ultimate-aloe-usca-hk-logo.svg",
  },
  {
    id: 4,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/advanced-level-90-us-logo.svg",
  },
  {
    id: 5,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/bliss-new-us-logo.svg",
  },
  {
    id: 6,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/glucosatrin-usca-au-logo.svg",
  },
  {
    id: 7,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/heart-health-logo-trademark-cross.svg",
  },
  {
    id: 8,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/mochatonix-us-logo.svg",
  },
  {
    id: 9,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/nutriclean-us-logo.svg",
  },
  {
    id: 10,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/vitamind-us-logo.svg",
  },
  {
    id: 11,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/isotonix-custom-cocktail-us-logo.svg",
  },
  {
    id: 12,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/nutri-physical-us-logo.svg",
  },
  {
    id: 13,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/curcumin-extreme-usca-hk-sg-logo.svg",
  },
  {
    id: 14,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/glucosatrin-usca-au-logo.svg",
  },
  {
    id: 15,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/awake-us-logo.svg",
  },
  {
    id: 16,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/opc3Chews_usa_32979_LogoTreatment_200x75.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/cannabiquin-logo-tm.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/pure-collagen-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/vivoquin-logo-trademark.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/neuro-focus-logo-trademark.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/glutaQ-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/daily-greens-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/fixx-au-tw-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/timeless-prescription-usca-mx-tw-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/pentaxyl-usca-au-hk-tw-sg-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/vitashield-usca-hk-tw-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/ldv-hommes%C2%AE-logo-200x75.svg",
  },
];

const Home = [
  {
    id: 1,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/global-care-us-logo.svg",
  },
  {
    id: 2,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/pet-health-usca-hk-sg-logo.svg",
  },
  {
    id: 3,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/pure-H2O-usca-hk-tw-logo.svg",
  },
  {
    id: 4,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/snap-usca-sg-mys-logo.svg",
  },
  {
    id: 5,
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/shopdotcom-us-digital-gift-card.svg",
  },
];

export const Exclusive = () => {
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
          <Box h="auto" w="320px" >
            <Flex display="-ms-flexbox" boxShadow="lg" rounded="md" bg="white">
              <Box textAlign="start" m="10px" color="#20230" fontWeight="bold">
                <Box>
                  <Text>About Us </Text>
                  <Box  color="#202340" fontSize={14} fontWeight="thin" fontFamily="sans-serif" >
                    <Text> About Us </Text>
                    <Text>Corporate History </Text>
                    <Text>Exclusive Brands </Text>
                    <Text>Executive Team </Text>
                    <Text>Careers </Text>
                    <Text> In the News</Text>
                  </Box>
                </Box>
                <Box>
                  <Text>Help</Text>
                </Box>
                <Box>
                  <Text> Partner With Us </Text>
                </Box>
                <Box>
                  <Text> Services </Text>
                </Box>
                <Box>
                  <Text>Terms & Privacy</Text>
                </Box>
                <Box>
                  <Text>Shipping info </Text>
                </Box>
                <Box>
                  <Text>Return Policy </Text>
                </Box>
                <Box>
                  <Text>Contact Us</Text>
                </Box>
                <Box>
                  <Text>Own Your Own SHOP Site</Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box h="auto" w="full" >
            <Text
              fontSize={22}
              mr="-120px"
              mb="10px"
              color="#202340"
              float="left"
              fontWeight="bold"
            >
              Our Brands{" "}
            </Text>
            <Spacer />
            <Text
              mt="20px"
              mr="-20px"
              fontSize={32}
              color="#202340"
              float="left"
            >
              Health & Nutrition
            </Text>
            {/* ---------- */}

            <Box mt="80px" h="auto" w="full" >
              <Grid
                w="full"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap={6}
              >
                {data.map((item) => (
                  <SimpleGrid key={item.id}>
                    <Box
                      columns={{ sm: 2, md: 4 }}
                      // spacing="5"
                      p={2}
                      textAlign="center"
                      rounded="lg"
                      color="black.400"
                      borderWidth={1}
                    >
                      <VStack>
                        <Image width="lg" src={item.image} />
                      </VStack>
                    </Box>
                  </SimpleGrid>
                ))}
              </Grid>
            </Box>

            <Box maxW="8xl" boxShadow="lg" p="6" rounded="md" bg="white">
              <Text
                fontSize={22}
                mr="-120px"
                // mb="10px"
                color="#202340"
                float="left"
                fontWeight="bold"
              >
                Jewelry
              </Text>
              <Box>
                <Image src="https://img.shop.com/Image/Images/11module/MABrands/layered-logo.svg" />
              </Box>
            </Box>
            {/* ----------- */}
            <Box maxW="8xl" boxShadow="lg" p="6" rounded="md" bg="white">
              <Grid
                w="full"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap={6}
              >
                {Home.map((item) => (
                  <SimpleGrid key={item.id}>
                    <Box
                      columns={{ sm: 2, md: 4 }}
                      // spacing="5"
                      p={2}
                      textAlign="center"
                      rounded="lg"
                      color="black.400"
                      borderWidth={1}
                    >
                      <VStack>
                        <Image width="lg" src={item.image} />
                      </VStack>
                    </Box>
                  </SimpleGrid>
                ))}
              </Grid>
            </Box>
            {/* ----------- */}
          </Box>
        </Flex>
      </Container>
    </>
  );
};
