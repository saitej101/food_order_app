import { useState } from 'react';
import './OrderOnline.css';
import { Container, SimpleGrid, Heading, Box, } from '@chakra-ui/react';
import itemList from "../../data/items.json";
import Item from '../../components/Item/Item';
import Cart from '../../components/Cart/Cart';

const OrderOnline = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const updateCart = (selectedItem: any) => {
    const indexToUpdate = cartItems.findIndex((item) => item.id === selectedItem.id);
    if (indexToUpdate >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[indexToUpdate].quantity = selectedItem.quantity;
      if (updatedCart[indexToUpdate].quantity <= 0) {
        updatedCart.splice(indexToUpdate, 1);
      }
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, selectedItem]);
    }
  };
  const onOrderPlace = () => {
    setCartItems([]);
    itemList.forEach((item) => item.quantity = 0);
  };
  return (
    <Box>
      <Cart items={cartItems} updateCart={updateCart} onOrderPlace={onOrderPlace}/>
      <Container maxW='6xl' pt="20px">
        <Heading as='h2' size='xl'>{'Best Food Items near you'}</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6} py="40px">
          {
            itemList.map((item) => {
              return (
                <Item item={item} key={item.id} updateCart={updateCart} onOrderPlace={onOrderPlace}>
                </Item>);
            })
          }
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OrderOnline;