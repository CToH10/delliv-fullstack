import { ProductListType } from "../utils/@types/productType";

export type StoreTypes = { loading: boolean };

export type ProductStoreTypes = { productsInfo: ProductListType };

export type UserStoreTypes = {token: string | null}