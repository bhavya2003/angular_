export interface Order {
    id: string;
    productId: string;
    quantity: number;
    status: string; // e.g., 'shipped', 'confirmed', etc.
    // Add other necessary properties
}
