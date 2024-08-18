import {
  CalendarOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getLinkClass = (isActive) =>
    isActive
      ? "text-red-500 font-semibold flex items-center"
      : "text-gray-600 hover:text-red-500 flex items-center";

  return (
    <div className="hidden lg:flex w-64 min-w-64 bg-white border-r border-gray-200">
      <ul className="p-4">
        <li className="py-3 text-lg">
          <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
            <HomeOutlined />
            <span className="ml-4">Beranda</span>
          </NavLink>
        </li>
        <li className="py-3 text-lg">
          <NavLink
            to="/drivers"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            <UserOutlined />
            <span className="ml-4">Driver Management</span>
          </NavLink>
        </li>
        <li className="py-3 text-lg">
          <NavLink>
            <CalendarOutlined />
            <span className="ml-4">Pickup</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
