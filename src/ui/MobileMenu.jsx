/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  AiFillAppstore,
  AiFillContainer,
  AiOutlineLogout,
} from "react-icons/ai";
import { useMenuContext } from "../contexts/MenuContext";

const MobileMenu = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();
  const [isManageProductsOpen, setIsManageProductsOpen] = useState(false);
  const location = useLocation();

  const toggleManageProducts = () => {
    setIsManageProductsOpen(!isManageProductsOpen);
    setBtnOpen(false);
  };

  return (
    <div
      id="menu"
      className={`fixed inset-0 z-30 bg-black p-6 opacity-90  md:hidden  ${
        !btnOpen ? "slide close" : "slide open"
      } `}
    >
      <nav className="mx-auto w-full md:w-4/5">
        <div className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="logo"
            className="mx-auto mt-4 w-24 rounded-md bg-white p-4 shadow-md"
          />
        </div>
        <ul className="mt-12 space-y-2">
          <li>
            <NavLink
              onClick={() => setIsManageProductsOpen(true)}
              to="/dashboard"
              className={`flex items-center gap-2 p-2 text-center text-lg font-bold transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-white ${
                location.pathname === "/dashboard"
                  ? "rounded-md bg-white text-blue-950"
                  : "text-white"
              }`}
            >
              <AiFillAppstore />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => setIsManageProductsOpen(!isManageProductsOpen)}
              className={`flex items-center gap-2 p-2 text-center text-lg font-bold text-white transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-blue-950  ${
                !isManageProductsOpen ? "rounded-md bg-white text-blue-950" : ""
              }`}
            >
              <AiFillContainer />
              <span>Manage Products</span>
            </NavLink>
          </li>

          <ul
            className={`ml-4 space-y-2 transition-all ${
              isManageProductsOpen
                ? "pointer-events-none h-0 -translate-y-20 transform opacity-0"
                : "opacity-1 h-fit -translate-y-0"
            }`}
          >
            <li>
              <NavLink
                onClick={toggleManageProducts}
                to="/dashboard/add-product"
                className={`block p-2 text-center text-lg font-bold transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-white ${
                  location.pathname === "/dashboard/add-product"
                    ? "rounded-md bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleManageProducts}
                to="/dashboard/list-product"
                className={`block p-2 text-center text-lg font-bold transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-white ${
                  location.pathname === "/dashboard/list-product"
                    ? "rounded-md bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                List Products
              </NavLink>
            </li>
          </ul>

          <li>
            <NavLink
              onClick={toggleManageProducts}
              to="/"
              className={`flex items-center gap-2 p-2 text-center text-lg font-bold text-white transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-white`}
            >
              <AiOutlineLogout />
              <button type="submit">Logout</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { MobileMenu };
