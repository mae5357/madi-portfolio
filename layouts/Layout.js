import React from "react";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="container bg-base-light">
      <main>{children}</main>
      <Footer />
    </div>
  );
};
