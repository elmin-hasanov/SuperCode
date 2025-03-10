export type Address = {
  street: string;
  postalCode: string;
  city: string;
};

export type Customer = {
  id: number;
  name: string;
  address: Address;
};

export type shopItem = {
  productName: string;
  price: number;
  description: string;
  imgUrl: string;
  stock: number;
};
