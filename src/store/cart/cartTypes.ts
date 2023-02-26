export interface Item {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  quantity: number,
}

export type CartState = {
  items: Item[],
}

export type CartAction ={
  type: string,
  item: Item,
  quantity: number,
};

export type CartDispatchType = (args: CartAction) => CartAction;