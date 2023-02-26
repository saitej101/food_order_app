import { useEffect, useState } from 'react';
import './Item.css';
import { formatCurrency } from '../../utilities/formatCurrency';
import { Stack, Card, CardBody, Text, Box, Heading, Image, Flex, Button, Spacer } from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';

function Item(props: any) {
  const[item, setItem] = useState(props.item);

  useEffect(
    () => {
      setItem(props.item);
    }
    , [props.item.quantity] // only run effect when workspaceID changes
  )

  const onAddItem = () => {
    const action = item.quantity === 0 ? 'add' : 'update';
    const updatedQuantity = item.quantity + 1;
    item.quantity = updatedQuantity;
    setItem({...item});
    props.updateCart(action, item, updatedQuantity);
  };
  
  const onRemoveItem = () => {
    const action = item.quantity === 1 ? 'remove' : 'update';
    const updatedQuantity = item.quantity - 1;
    item.quantity = updatedQuantity;
    setItem({...item});
    props.updateCart(action, item, updatedQuantity);
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