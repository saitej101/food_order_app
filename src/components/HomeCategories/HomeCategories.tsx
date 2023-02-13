import './HomeCategories.css';

import { Stack, SimpleGrid, Card, CardBody, Text, Heading, Image, Box, } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function HomeCategories() {
  const homeCategories = [
    {
      imageSrc: 'order_online_bg.jpg',
      headerTitle: 'Order Online',
      description: `Stay home and order to your doorstep`,
      route: 'order-online',
    },
    {
      imageSrc: 'dine_in_bg.jpg',
      headerTitle: 'Dining',
      description: `View the city's favourite dining venues`,
    },
    {
      imageSrc: 'nightlife_bg.jpg',
      headerTitle: 'Nightlife and Clubs',
      description: `Explore the city's top nightlife outlets`,
    }
  ];

  const navigate = useNavigate();
  const handleCategorySelection = (selectedCategory: any) => navigate(selectedCategory?.route);

  return (
    <Box>
      <SimpleGrid mx="200px" py="40px" spacing={6} columns={3}>
        {homeCategories.map((category) => {
          return (
            <Card border='1px' borderColor='gray.200' cursor='pointer' maxW='sm' variant='unstyled' onClick={() => handleCategorySelection(category)}>
              <CardBody>
                <Image
                  src={category.imageSrc}
                  alt='order online image'
                  borderTopRadius='lg'
                  objectFit='cover'
                  h="180px"
                  w="100%"
                />
                <Stack p='4' spacing='2'>
                  <Heading size='md'>{category.headerTitle}</Heading>
                  <Text>{category.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default HomeCategories;