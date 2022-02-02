import React from "react";
import { ReactComponent as Cart } from "../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as Menu } from "../assets/shared/tablet/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-black">
      <Menu />
      <Logo />
      <Cart />
    </div>
  );
}

export default Navbar;
