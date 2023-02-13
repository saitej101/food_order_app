
import './NightLife.css';
import { Stack, SimpleGrid, Card, CardBody, Text, Box, Heading, Image, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function NightLife() {
  const nightLifeRestuarants = [
    {
      name: 'Rude Lounge',
      foodTypes: ['North Indian', 'Finger Food', 'Chinese', 'Continental', 'Italian'],
      address: 'Vashi, Navi Mumbai',
      rating: 4.1,
      imageSrc: 'rude_lounge.jpg'
    },
    {
      name: 'House of Lords',
      foodTypes: ['Italian', 'Mangalorean', 'Kebab'],
      address: 'Vashi, Navi Mumbai',
      rating: 4.5,
      imageSrc: 'house_of_lords.jpg'
    },
    {
      name: 'Cult Lounge',
      foodTypes: ['Chinese', 'Continental',],
      address: 'Vashi, Navi Mumbai',
      rating: 4.0,
      imageSrc: 'cult_lounge.jpg'
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
      name: 'Vashi Social',
      foodTypes: ['North Indian', 'Chinese', 'Biryani'],
      address: 'Inorbit Mall, Vashi, Navi Mumbai',
      rating: 4.1,
      imageSrc: 'vashi_social.jpg'
    }];
  return (
    <Box mx="200px">
      <Heading as='h2' size='xl'>{'Nightlife Restuarants near you'}</Heading>
      <SimpleGrid columns={3} spacing={6} py="40px">
        {
          nightLifeRestuarants.map((restuarant) => {
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
                    <Text noOfLines={1}>{restuarant.foodTypes.join(', ')}</Text>
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

export default NightLife;