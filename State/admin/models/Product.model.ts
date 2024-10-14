export interface Product {
  id: number;
  imageUrl: string;
  brand: string;
  title: string;
  color: string;
  discountedPrice: number;
  price: number;
  discountPercent: number;
  description: string;
  size:  {name : string} []; // Make sure size is an array of objects
  available: boolean; // Add this field if it's required
}

export interface Size {
  name: string;
  quantity: number;
  available?: boolean;
}
