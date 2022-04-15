import Contact from "@components/Contact";
import Cursor from "@components/Cursor";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import ScrollToTop from "@components/ScrollTop";
import React from "react";

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className="bg-lightPrimary dark:bg-darkPrimary" id="home">
      <Nav />
      <Cursor />
      <ScrollToTop />
      {children}
      <Contact />
      <Footer />
    </div>
  );
};
export default Layout;
