"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  id: string; // Add this line
  name: string;
  highlight: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  highlight,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
    
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: highlight,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}