import { useState } from 'react';
import './Item.css';
import { formatCurrency } from '../../utilities/formatCurrency';
import { Stack, Card, CardBody, Text, Box, Heading, Image, Flex, Button, Spacer } from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';

function Item(props: any) {
  const [item, setItem] = useState(props.item);
  const onAddItem = () => {
    item.quantity += 1;
    setItem(item);
    props.updateCart(item);
  };
  const onRemoveItem = () => {
    item.quantity -= 1;
    setItem(item);
    props.updateCart(item);
  };

  return (
    <Card key={item.id} variant='unstyled' boxShadow='xs'>
      <CardBody>
        <Image
          src={item.imgUrl}
          alt='order online image'
          borderTopRadius='lg'
          objectFit='cover'
          h="180px"
          w="100%"
        />
        <Stack py='4' spacing='2' p={2}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Heading size='md'>
              {item.name}
            </Heading>
          </Box>
          <Flex>
            <Text verticalAlign="center">{formatCurrency(item.price)}</Text>
            <Spacer />
            {item.quantity > 0 ? (
              <Flex>
                <Box py={1} px={2} border='1px' borderColor='gray.200' cursor="pointer" onClick={onRemoveItem}>
                  {item.quantity === 1 ? (
                    <DeleteIcon />
                  ) : (
                    <MinusIcon boxSize={3} />
                  )}
                </Box>
                <Box py={1} px={2} border='1px' borderColor='gray.200'>
                  <Text>{item.quantity}</Text>
                </Box>
                <Box py={1} px={2} border='1px' borderColor='gray.200' cursor="pointer" onClick={onAddItem}>
                  <AddIcon boxSize={3} />
                </Box>
              </Flex>
            ) : (
              <Button colorScheme='teal' ml="80px" variant='outline' size="sm" onClick={onAddItem}>Add to Cart</Button>
            )}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Item;