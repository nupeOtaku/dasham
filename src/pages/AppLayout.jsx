import { Outlet } from "react-router-dom";
import SideNav from "../ui/SideNav";
import Styles from "./Dashboard.module.css";
import Header from "../ui/Header";
import MainContent from "../ui/MainContent";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <div className={` ${Styles.container}`}>
      <SideNav />
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  );
};

export default AppLayout;
