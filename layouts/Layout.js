import React from "react";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="bg-base-light">
      <main>{children}</main>
    </div>
  );
};
