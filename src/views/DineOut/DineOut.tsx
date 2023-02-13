
import './DineOut.css';
import { Stack, SimpleGrid, Card, CardBody, Text, Box, Heading, Image, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function DineOut() {
  const restuarants = [{
    name: 'House of Lords',
    foodTypes: ['Italian', 'Mangalorean', 'Kebab'],
    address: 'Vashi, Navi Mumbai',
    rating: 4.5,
    imageSrc: 'house_of_lords.jpg'
  },
  {
    name: 'The Food Studio',
    foodTypes: ['North Indian', 'Continental'],
    address: 'Satra Plaza, Vashi, Navi Mumbai',
    rating: 4.0,
    imageSrc: 'food_studio.jpg'
  },
  {
    name: 'The Union Bar',
    foodTypes: ['North Indian', 'Continental'],
    address: 'Vashi, Navi Mumbai',
    rating: 4.3,
    imageSrc: 'the_union_bar.jpg'
  },
  {
    name: 'Rajdhani',
    foodTypes: ['Gujrati', 'Rajasthani', 'North Indian'],
    address: 'Vashi, Navi Mumbai',
    rating: 3.8,
    imageSrc: 'rajdhani.jpg'
  },
  {
    name: 'Vashi Social',
    foodTypes: ['North Indian', 'Chinese', 'Biryani'],
    address: 'Inorbit Mall, Vashi, Navi Mumbai',
    rating: 4.1,
    imageSrc: 'vashi_social.jpg'
  },
  {
    name: `AB's - Absolute Barbecues`,
    foodTypes: ['North Indian', 'Fast Food', 'Kebab'],
    address: 'Vashi, Navi Mumbai',
    rating: 4.2,
    imageSrc: 'absolute_barbecues.jpg'
  }];
  return (
    <Box mx="200px">
      <Heading as='h2' size='xl'>{'Best Dining Restuarants near you'}</Heading>
      <SimpleGrid columns={3} spacing={6} py="40px">
        {
          restuarants.map((restuarant) => {
            return (
              <Card variant='unstyled' cursor='pointer' _hover={{ boxShadow: '2xl' }} p={2}>
                <CardBody>
                  <Image
                    src={restuarant.imageSrc}
                    alt='order online image'
                    borderTopRadius='lg'
                    objectFit='cover'
                    h="180px"
                    w="100%"
                  />
                  <Stack py='4' spacing='2'>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Heading size='md'>
                        {restuarant.name}
                      </Heading>
                      <Tag size='sm' variant='outline' colorScheme='green' textAlign='right'>
                        <TagLabel>{restuarant.rating}</TagLabel>
                        <TagRightIcon as={StarIcon} />
                      </Tag>
                    </Box>
                    <Text noOfLines={1}>{String(restuarant.foodTypes)}</Text>
                    <Text>{restuarant.address}</Text>
                  </Stack>
                </CardBody>
              </Card>);
          })
        }
      </SimpleGrid>
    </Box>
  );
};

export default DineOut;