import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stack, SimpleGrid, Card, CardBody, CardFooter, Center, Text, Heading, Button, Image, Box, } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Box bgSize="100%" h="320px" backgroundImage="url('/home_banner.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat">
        <Center h="100%">
          <Stack mt='6' spacing='2'>
            <Center>
              <Heading fontSize={50} color='#fff' size='lg'>Zomato</Heading>
            </Center>
            <Text fontSize={30} color='#fff'>Discover the best food & drinks in Mumbai</Text>
          </Stack>
        </Center>
      </Box>
      <Box>
        <SimpleGrid mx="200px" py="40px" spacing={6} columns={3}>
          <Card maxW='sm' variant='unstyled'>
            <CardBody>
              <Image
                src='order_online_bg.jpg'
                alt='order online image'
                borderRadius='lg'
                objectFit='cover'
                h="180px"
                w="100%"
              />
              <Stack mt='6' spacing='2'>
                <Heading size='md'>Order Online</Heading>
                <Text>Stay home and order to your doorstep</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW='sm' variant='unstyled'>
            <CardBody>
              <Image
                src='dine_in_bg.png'
                alt='dine in image'
                borderRadius='lg'
                objectFit='cover'
                h="180px"
                w="100%"
              />
              <Stack mt='6' spacing='2'>
                <Heading size='md'>Dining</Heading>
                <Text>View the city's favourite dining venues</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW='sm' variant='unstyled'>
            <CardBody>
              <Image
                src='nightlife_bg.jpg'
                alt='night life image'
                borderRadius='lg'
                objectFit='cover'
                h="180px"
                w="100%"
              />
              <Stack mt='6' spacing='2'>
                <Heading size='md'>Nightlife and Clubs</Heading>
                <Text>Explore the city's top nightlife outlets</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default App;
