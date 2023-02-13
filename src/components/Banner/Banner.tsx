import './Banner.css';
import { Stack, Center, Text, Heading, Box, } from '@chakra-ui/react'

function Banner() {
  return (
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
  );
};

export default Banner;