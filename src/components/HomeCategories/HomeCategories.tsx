import './HomeCategories.css';

import { Stack, SimpleGrid, Card, CardBody, Text, Heading, Image, } from '@chakra-ui/react';
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
      route: 'dine-out',
    },
    {
      imageSrc: 'nightlife_bg.jpg',
      headerTitle: 'Nightlife and Clubs',
      description: `Explore the city's top nightlife outlets`,
      route: 'night-life',
    }
  ];

  const navigate = useNavigate();
  const handleCategorySelection = (selectedCategory: any) => navigate(selectedCategory?.route);

  return (
    <SimpleGrid columns={3} spacing={6} mx="200px" py="40px">
      {homeCategories.map((category) => {
        return (
          <Card
            border='1px'
            borderColor='gray.200'
            cursor='pointer'
            maxW='sm'
            variant='unstyled'
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
            onClick={() => handleCategorySelection(category)}
          >
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
  );
};

export default HomeCategories;