import {
  CalendarOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex w-64 min-w-64 bg-white border-r border-gray-200">
      <ul className="p-4">
        <li className="py-3 text-lg text-gray-600 hover:text-red-500 cursor-pointer flex items-center">
          <HomeOutlined />
          <span className="ml-4">Beranda</span>
        </li>
        <li className="py-3 text-lg text-red-500 font-semibold flex items-center cursor-pointer">
          <UserOutlined />
          <span className="ml-4">Driver Management</span>
        </li>
        <li className="py-3 text-lg text-gray-600 hover:text-red-500 cursor-pointer flex items-center">
          <CalendarOutlined />
          <span className="ml-4">Pickup</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
