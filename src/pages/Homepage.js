import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">
        Welcome to Driver Management
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Manage your drivers efficiently and effectively. Navigate to the Driver
        Management page to view, add, and manage your drivers.
      </p>
      <Link
        to="/drivers"
        className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 text-lg"
      >
        Go to Driver Management
      </Link>
    </div>
  );
};

export default Homepage;
