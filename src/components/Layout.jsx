import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GearSection from "./GearSection";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <GearSection />
      <Footer />
    </div>
  );
}

export default Layout;
