import { PopularCardProps } from "@/components/PopularCard";

export const popular: PopularCardProps[] = [
  {
    image: "plate-1.png",
    price: "5000",
    subTitle: "Break Fast",
    title: "Indian Fries",
    bgColor: "#FFE0E099",
  },
  {
    image: "header-right-3.png",
    price: "5000",
    subTitle: "Lunch",
    title: "French Fries",
    bgColor: "#FFF7E099",
  },
  {
    image: "plate-2.png",
    price: "5000",
    subTitle: "Dinner",
    title: "Local Fries",
    bgColor: "#E2E2E299",
  },
];

export const customerReviews: CustomerProps[] = [
  {
    name: "Dr Ekenma",
    review: ` Fastest delivery in town for the kind of food order now and have a swell
        time eating Fastest delivery in town for the kind of`,
    image: "customer-dp.png",
  },
  {
    name: "Pst Jerry",
    review: `Chiggy is an epitome of gifts and talent`,
    image: "customer-dp.png",
  },
  {
    name: "Pst Eno",
    review: `Good job dear`,
    image: "customer-dp.png",
  },
];

export interface menuCategories {
  id: string;
  name: string;
  image: string;
  price: string;
  subTitle: string;
  title: string;
}
export const menuCategories: menuCategories[] = [
  {
    id: "sides",
    name: "Sides",
    image: "smile.png",
    price: "2000",
    subTitle: "Dinner",
    title: "Local Fries",
  },
  {
    id: "sides",
    name: "Sides",
    image: "fries.png",
    price: "1000",
    subTitle: "Break Fast",
    title: "Indian Fries",
  },
  {
    id: "snacks",
    name: "Snacks",
    image: "snack.png",
    price: "5000",
    subTitle: "Lunch",
    title: "French Fries",
  },
  {
    id: "drinks",
    name: "Drinks",
    image: "plate-1.png",
    price: "1000",
    subTitle: "Break Fast",
    title: "Indian Fries",
  },
  {
    id: "h-regs",
    name: "House Regulars",
    image: "header-right-3.png",
    price: "3000",
    subTitle: "Lunch",
    title: "French Fries",
  },
  {
    id: "sides",
    name: "Sides",
    image: "plantain.png",
    price: "3000",
    subTitle: "Lunch",
    title: "French Fries",
  },

  {
    id: "snacks",
    name: "Snacks",
    image: "shawarma.png",
    price: "2000",
    subTitle: "Dinner",
    title: "Local Fries",
  },
  {
    id: "snacks",
    name: "Snacks",
    image: "mac.png",
    price: "2000",
    subTitle: "Dinner",
    title: "Local Fries",
  },
  {
    id: "drinks",
    name: "Drinks",
    image: "header-right-3.png",
    price: "5000",
    subTitle: "Lunch",
    title: "French Fries",
  },
  {
    id: "h-regs",
    name: "House Regulars",
    image: "plate-1.png",
    price: "1000",
    subTitle: "Break Fast",
    title: "Indian Fries",
  },
  {
    id: "sides",
    name: "Sides",
    image: "plate-2.png",
    price: "2000",
    subTitle: "Dinner",
    title: "Local Fries",
  },
];
