export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  available: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}