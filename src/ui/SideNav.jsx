/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  AiFillAppstore,
  AiFillContainer,
  AiOutlineLogout,
} from "react-icons/ai";

const SideNav = () => {
  const [isManageProductsOpen, setIsManageProductsOpen] = useState(false);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleManageProducts = () => {
    setIsManageProductsOpen(!isManageProductsOpen);
  };

  return (
    <div
      className={`relative hidden h-screen transition-all md:block  ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }  bg-blue-950 text-white`}
    >
      <nav className="mx-auto w-4/5">
        {/* <div
          className={`relative  left-4 top-4 z-40 cursor-pointer p-4 text-blue-950`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div> */}
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
              onClick={toggleManageProducts}
              to="#"
              className={`flex items-center gap-2 p-2 text-center text-lg font-bold transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-white  ${
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
              to="/"
              className={`flex items-center gap-2 p-2 text-center text-lg font-bold transition-all hover:cursor-pointer hover:rounded-md hover:bg-orange-600 hover:text-white`}
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

export default SideNav;
