export interface Product {
  _id: string;
  price: number;
  quantity?: number;
  name: string;
  title: string;
  image: string;
  description: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface Category {
  description: string;
  name: string;
  _id: string;
}
