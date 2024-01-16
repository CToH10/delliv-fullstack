import { userProfile } from "../context/userContext";
import { ProductListType, ProductType } from "../utils/@types/productType";

export type CartProduct = Pick<ProductType, "id" | "name" | "price"> & {
  quantity: number;
  total: number;
};

export type StoreTypes = { loading: boolean, userInfo:  userProfile | undefined};

export type ProductStoreTypes = { productsInfo: ProductListType };

export type UserStoreTypes = { token: string | null };

export type CartStoreTypes = { cart: CartProduct[] | [] };

export type ModalStoreTypes = { modal: boolean, content: string };
