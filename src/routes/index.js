import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Basket = React.lazy(() => import("../pages/Basket"));
const Products = React.lazy(() => import("../pages/Products"));
const Product = React.lazy(() => import("../pages/Product"));

export const routes = [
  { name: "home", path: "/", component: Home, id: 1 },
  { name: "Products", path: "/:slug", component: Products, id: 2 },
  { name: "Product", path: "/:slug/:id", component: Product, id: 3 },
  { name: "Basket", path: "/basket", component: Basket, id: 4 },
  { name: "Signup", path: "/signup", component: Basket, id: 5 },
];
