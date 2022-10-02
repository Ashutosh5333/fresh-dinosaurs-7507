

import React from "react";
import { Alert, AlertDescription, AlertIcon, Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthContextProvider";

export const Signin = () => {
  const[email,setEmail]=useState("")
  const { loginUser, authState } = useContext(AppContext);
 const [password,setPassword] = useState("");
 const [loading,setLoading]= useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
  setLoading(true)
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email,password})
  })
    .then((r) => r.json())
     .then(res=> {
      if(res.token){
        loginUser(res.token)
        Navigate("/")
      }
     })
    .catch((err) => {
      console.log(err);
    });
};
  
  return (
    <Container  m="auto" h="350px" maxW="8xl">
      <Flex>
      <Box width="400px" ml="20px" textAlign="center" px={8} mt={10} borderwidth={1}
    borderRadius={8} boxshadow="lg"
     >
        <Heading textAlign="center" my="10px">
          Signin
        </Heading>
        <form  onSubmit={handleSubmit}> 
               <FormControl>
          <FormLabel variant="filled" my="10px"  >Email address </FormLabel>
          <Input type="email" placeholder="yourname@Example.com"
            // name="email"
            value={email} 
            onChange={e=>setEmail(e.target.value)}
           />
        </FormControl>
        <FormControl>
          <FormLabel variant="filled" my="10px">Password</FormLabel>
          <Input type='password'
           placeholder="Please enter your Password"
          //  name="password"
            value={password} 
            onChange={e=>setPassword(e.target.value)}
            />
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
