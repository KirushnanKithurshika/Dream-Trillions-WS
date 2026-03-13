import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import bgImage from "../assets/BG2.png";
import "./MainLayout.css";
import Footer from "../components/Footer/footer";

const MainLayout = () => {
  return (
    <div
      className="main-layout"
    >
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
