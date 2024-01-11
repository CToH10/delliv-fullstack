export interface ProductType {
  id: string;
  name: string;
  stock: number;
  price: number;
}

export type ProductListType = {
  count: number;
  previousPage: null | string;
  nextPage: null | string;
  data: ProductType[] | [];
};
