import { query } from "express";

export const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "black", label: "Black" }
      ]
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "XS", label: "XS" },
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
        { value: "XXL", label: "XXL" }
      ]
    }
  ];
  
  export const singleFilter = [
    {
      id: "price",
      name: "Price Range",
      options: [
      { value: "159-399", label: "₹159 - ₹399" },
      { value: "399-999", label: "₹399 - ₹999" },
      { value: "999-1999", label: "₹999 - ₹1999" },
      { value: "1999-2999", label: "₹1999 - ₹2999" },
      { value: "3999-4000", label: "₹3999 - ₹4000" }
      ]
    },
    {
      id: "availability",
      name: "Stock Availability",
      options: [
        { value: "in_stock", label: "In Stock" },
        { value: "out_of_stock", label: "Out of Stock" }
      ]
    },
    {
      id: "discount",
      name: "Discount",
      options: [
        { value: "10%", label: "10% or more" },
        { value: "20%", label: "20% or more" },
        { value: "30%", label: "30% or more" },
        { value: "40%", label: "40% or more" },
        { value: "50%", label: "50% or more" }
      ]
    }
  ];

  export const sortOptions =[
    {name: "Price : Low to High", query: "price_low", current:false},
    {name: "Price : High to Low", query: "price_high", current:false},
  ]
  