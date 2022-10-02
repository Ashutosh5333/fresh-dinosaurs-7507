import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const data = [
  {
    id: 1,
    image: "https://www.shop.com/feo-cdn/u/u/PuwcqKsss.webp",
    title: "WOMEN'S SWEATERS",
  },
  {
    id: 2,
    image: "https://www.shop.com/feo-cdn/M/Q/pb_1UnmK8.webp",
    title: "SCARVES",
  },
  {
    id: 3,
    image: "https://www.shop.com/feo-cdn/6/d/3_YMkXXo8.webp",
    title: "WOMEN'S JEANS",
  },
  {
    id: 4,
    image: "https://www.shop.com/feo-cdn/U/y/4oXs0zawk.webp",
    title: "WOMEN'S BOOTS",
  },
  {
    id: 5,
    image: "https://www.shop.com/feo-cdn/E/e/UAkYvmwEY.webp",
    title: "BAGS AND TOTES",
  },
  {
    id: 6,
    image: "https://www.shop.com/feo-cdn/i/-/zWneLwnlw.webp",
    title: "PUMPIKIN SPICE",
  },
];

export const FallHaves = () => {
  return (
    <Box
      // border="1px solid blue"
      bg="#fff;"
      maxW="8xl"
      // borderRadius="lg"
      // overflow="hidden"
      // boxShadow="lg"
    >
      <Text
        fontSize={33}
        textShadow=" 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff"
        font-weight="700"
        color="#2e2c38"
      >
        Fall Must-Haves
      </Text>

      <Box
        mt="58px"
        mb="58px"
        display="flex"
        spacing="2"
        textAlign="center"
        color="black.500"
      >
        {data.map((user) => (
          <Box
            key={user.id}
          >
           <Box  borderRadius={{'3xl': '3.5rem',}}
            boxShadow="2xl"
            rounded="lg"
            overflow="hidden">  
            <Image src={user.image} />
            </Box>
            <Text fontWeight="bold" color="#202340">
              {user.title}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
