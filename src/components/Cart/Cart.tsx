import { useState } from 'react';
import {
  SimpleGrid,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Flex,
  Text,
  Box,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import { FaShoppingCart } from "react-icons/fa";
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { formatCurrency } from '../../utilities/formatCurrency';

const Cart = (props: any) => {
  const cartItems = props.items;
  const toast = useToast();
  const onAddItem = (item: any) => {
    item.quantity += 1;
    props.updateCart(item);
  };
  const onRemoveItem = (item: any) => {
    item.quantity -= 1;
    props.updateCart(item);
  };

  const onOrderPlace = () => {
    toast({
      title: 'Order Placed.',
      description: "We've placed your order to the restuarant.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    props.onOrderPlace();
  };

  const getCartTotal = () => {
    let total = 0;
    cartItems.forEach((item: any) => {
      total += (item.price * item.quantity);
    });
    return total;
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button pos="fixed" zIndex="2" float="right" bottom="20px" right="20px" ml="auto"><FaShoppingCart size="sm" /></Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton color="blue.500" />
        <PopoverHeader color="blue.500" >Cart Details</PopoverHeader>
        <PopoverBody>
          {
            cartItems?.length > 0 ?
              (
                <Box>
                  <SimpleGrid columns={1} spacing={6} py="40px">
                    {
                      cartItems.map((item: any) => {
                        return (
                          <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                          >
                            <Image
                              objectFit='cover'
                              h="80px"
                              w="80px"
                              src={item.imgUrl}
                              alt='Caffe Latte'
                            />

                            <Stack>
                              <CardBody>
                                <Heading size='md'>{item.name}</Heading>
                                <Text verticalAlign="center">{formatCurrency(item.price)}</Text>
                                <Flex pt="10px">
                                  {item.quantity > 0 ? (
                                    <Flex>
                                      <Box py={1} px={2} border='1px' borderColor='gray.200' cursor="pointer" onClick={() => onRemoveItem(item)}>
                                        {item.quantity === 1 ? (
                                          <DeleteIcon />
                                        ) : (
                                          <MinusIcon boxSize={3} />
                                        )}
                                      </Box>
                                      <Box py={1} px={2} border='1px' borderColor='gray.200'>
                                        <Text>{item.quantity}</Text>
                                      </Box>
                                      <Box py={1} px={2} border='1px' borderColor='gray.200' cursor="pointer" onClick={() => onAddItem(item)}>
                                        <AddIcon boxSize={3} />
                                      </Box>
                                    </Flex>
                                  ) : (
                                    <Button colorScheme='teal' ml="80px" variant='outline' size="sm" onClick={() => onAddItem(item)}>Add to Cart</Button>
                                  )}
                                </Flex>
                              </CardBody>
                            </Stack>
                          </Card>
                        )
                      })
                    }
                  </SimpleGrid>
                  <Flex>
                    <Text fontSize='2xl'>{formatCurrency(getCartTotal())}</Text>
                    <Spacer />
                    <Button colorScheme='teal' w="100px" size="md" onClick={onOrderPlace}>Place Order</Button>
                  </Flex>
                </Box>
              ) :
              (
                <Heading as='h4' size='md'>No Items in Cart</Heading>
              )
          }
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;