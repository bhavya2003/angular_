export interface Product {
    title: string;
    brand: string;
    color: string;
    price: number | null;
    discountedPrice: number | null;
    imageUrl: string;
    sizes: { name: string; quantity: number | null }[];
}
