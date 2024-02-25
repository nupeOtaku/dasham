/* eslint-disable react/prop-types */
import Search from "./Search";
import User from "./User";
import Welcome from "./Welcome";
import Styles from "../pages/Dashboard.module.css";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenu } from "./MobileMenu";

const Header = ({ children }) => {
  return (
    <div>
      <div
        className={`${Styles.secondCol} flex h-24 items-center justify-between bg-white p-6 shadow-lg md:grid md:grid-cols-[30%_1fr_30%]`}
      >
        <div className="block md:hidden">
          <MobileMenu />
          <HamburgerButton />
        </div>
        <Welcome />
        <Search />
        <User />
      </div>
      {children}
    </div>
  );
};

export default Header;
