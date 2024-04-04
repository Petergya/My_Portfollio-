

import { poppins as poppinsFont } from "@next/font/google";

// font settings
const poppins = ({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { Children } from "react";

const Layout = ({ children }) => {
  return (
    <div className={"page bg-site text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative "}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      
    </div>
  );
};

export default Layout;

