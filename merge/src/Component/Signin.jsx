import React, { useContext } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

import {AppContext} from "../AuthContext/AuthContextProvider"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from "../AuthContext/action"


   export const Signin = () => {
    const {dispatch} = useContext(AppContext)
    const navigate = useNavigate();
 
 const handleLogin = (e) => {
        e.preventDefault();
        dispatch(LOGIN_REQUEST)
        axios.post('https://reqres.in/api/login',{
         "email": "eve.holt@reqres.in",
         "password": "cityslicka"
        }).then(res =>{
         dispatch({...LOGIN_SUCCESS,payload:res.data.token});
          return navigate('/')
        }).catch(err => {
         console.log(err)
         dispatch(LOGIN_FAILURE)
        })
 
}

  return (
    <Container  m="auto" h="350px" maxW="8xl">
      <Flex>
      <Box width="400px" ml="20px" textAlign="center" px={8} mt={10} borderwidth={1}
    borderRadius={8} boxshadow="lg"
     >
        <Heading textAlign="center" my="10px">
          Signin
        </Heading>
        <form  onSubmit={handleLogin}> 
               <FormControl>
          <FormLabel variant="filled" my="10px"  >Email address </FormLabel>
          <Input type="email" placeholder="yourname@Example.com"
           />
        </FormControl>
        <FormControl>
          <FormLabel variant="filled" my="10px">Password</FormLabel>
          <Input type='password'
           placeholder="Please enter your Password"/>
        </FormControl>
        <FormControl>
          <FormLabel variant="filled" my="10px">Forgot your password</FormLabel>
         
        </FormControl>

        <Button type="submit" p='5' w="200px" color="#fff" textAlign="center" bg="#202340" 
        >Sign in</Button>
        </form>

    </Box>

{/* -------------------- */}
        <Box h="200px" maxW="400px" mt="85px" >

        <Text fontSize={22} fontWeight="bold" > Don't have an account </Text>         
         <Box>
         <Text textAlign="start" m="auto">
          With a SHOP.COM account, you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, order status and history, saved payment options and addresses, exclusive emails and more. Learn more
          </Text>
         </Box>
         <Button p='5' w="200px" color="#fff" textAlign="center" bg="#202340">create your new account </Button>
          
        </Box>
      </Flex>

    </Container>
  );
};
