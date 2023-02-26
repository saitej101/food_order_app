import * as cartActionTypes from './cartActionTypes';
import { Item, CartState, CartAction } from './cartTypes';

const initialState: CartState = {
  items: [],
};

const reducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item),
      }
    case cartActionTypes.REMOVE_ITEM:
      const updateItems: Item[] = state.items.filter(
        item => item.id !== action.item.id
      );
      return {
        ...action,
        items: updateItems,
      }
    case cartActionTypes.UPDATE_ITEM:
      let item: any = state.items.find(item => item.id === action.item.id);
      let newItems = state.items.filter(item => item.id !== action.item.id);
      item.quantity = action.quantity;
      newItems.push(item);
      return {
        ...state,
        items: newItems,
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      }
  }
  return state;
};

export default reducer;