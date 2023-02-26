import './OrderOnline.css';
import { Container, SimpleGrid, Heading, Box, } from '@chakra-ui/react';
import itemList from "../../data/items.json";
import Item from '../../components/Item/Item';
import Cart from '../../components/Cart/Cart';

import { addItem, clearCart, removeItem, updateItem } from '../../store/cart/cartActionCreators';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Item as CartItem } from '../../store/cart/cartTypes';
import { useState } from 'react';

const OrderOnline = () => {
  const [items, setItems] = useState(itemList);

  const dispatch: Dispatch<any> = useDispatch();
  const onOrderPlace = () => {
    itemList.forEach((item) => item.quantity = 0);
    setItems([...itemList]);
    dispatch(clearCart());
  };

  const updateCart = (action: string, item: CartItem, updatedQuantity: number) => {
    console.log('action !', action, item);
    
    switch (action) {
      case 'add':
        dispatch(addItem(item));
        break;

      case 'remove':
        dispatch(removeItem(item));
        break;

      case 'update':
        dispatch(updateItem(item, updatedQuantity));
        break;

      default:
        break;
    }
  };

  return (
    <Box>
      <Cart updateCart={updateCart} onOrderPlace={onOrderPlace} />
      <Container maxW='6xl' pt="20px">
        <Heading as='h2' size='xl'>{'Best Food Items near you'}</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6} py="40px">
          {
            items.map((item) => {
              return (
                <Item item={item} key={item.id} updateCart={updateCart} onOrderPlace={onOrderPlace} />
              );
            })
          }
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OrderOnline;