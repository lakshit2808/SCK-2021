export interface ProductModel{
  id: number;
  name: string;
  categories: string;
  description: string;
  image: any[];
  price: string;
  on_sale: boolean;
  featured: boolean;
  sale_price: string;
  regular_price: string;
  slug: string;
  stock_quantity:number;
  stock_status: string;
  in_cart?: number;

}
