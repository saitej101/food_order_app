import * as cartActionTypes from './cartActionTypes';
import { Item, CartAction, CartDispatchType } from './cartTypes';

export function simulateHttpRequest(action: CartAction) {
  return (dispatch: CartDispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 50)
  }
}

export function addItem(item: Item, quantity = 1) {
  const action: CartAction = {
    type: cartActionTypes.ADD_ITEM,
    item,
    quantity,
  };

  return simulateHttpRequest(action);
}

export function removeItem(item: Item, quantity = 0) {
  const action: CartAction = {
    type: cartActionTypes.REMOVE_ITEM,
    item,
    quantity,
  };

  return simulateHttpRequest(action);
}

export function updateItem(item: Item, quantity: number) {
  const action: CartAction = {
    type: cartActionTypes.UPDATE_ITEM,
    item,
    quantity,
  };

  return simulateHttpRequest(action);
}

export function clearCart() {
  const action = {
    type: cartActionTypes.CLEAR_CART
  };

  return action;
}