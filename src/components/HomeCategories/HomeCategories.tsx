import './HomeCategories.css';

import { Stack, SimpleGrid, Card, CardBody, Text, Heading, Image, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function HomeCategories() {
  const homeCategories = [
    {
      id: 1,
      imageSrc: 'order_online_bg.jpg',
      headerTitle: 'Order Online',
      description: `Stay home and order to your doorstep`,
      route: 'order-online',
    },
    {
      id: 2,
      imageSrc: 'dine_in_bg.jpg',
      headerTitle: 'Dining',
      description: `View the city's favourite dining venues`,
      route: 'dine-out',
    },
    {
      id: 3,
      imageSrc: 'nightlife_bg.jpg',
      headerTitle: 'Nightlife and Clubs',
      description: `Explore the city's top nightlife outlets`,
      route: 'night-life',
    }
  ];

  const navigate = useNavigate();
  const handleCategorySelection = (selectedCategory: any) => navigate(selectedCategory?.route);

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} py="40px">
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
            key={category.id}
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