import { CartProduct } from "../store/storeType";

export const cartFullQuantity = (cart: CartProduct[]) => {
  let fullQuantity = 0;
  cart.forEach((product) => {
    fullQuantity += product.quantity;
  });

  return fullQuantity;
};
