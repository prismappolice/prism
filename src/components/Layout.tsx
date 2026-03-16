import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isIndex = location.pathname === "/";
  return (
    <div className={"flex flex-col" + (isIndex ? " min-h-[120vh]" : " min-h-screen") }>
      <Navbar />
      <main className={"flex-1 w-full" + (isIndex ? "" : " px-4")}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
