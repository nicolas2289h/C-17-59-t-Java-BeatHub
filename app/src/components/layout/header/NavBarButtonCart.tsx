"use client";

import { BeatsCountShoppingCart } from "./BeatsCountShoppingCart";
import { ModalShoppingCart } from "./ModalShoppingCart";
export const NavBarButtonCart = () => {
  return (
    <div className="relative top-1">
      <BeatsCountShoppingCart />
      <ModalShoppingCart />
    </div>
  );
};
