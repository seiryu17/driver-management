import axios from "axios";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Pagination from "../Pagination";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import Search from "../Search";
import { PlusOutlined } from "@ant-design/icons";

const DriverCard = lazy(() => import("./DriverCard"));

const DriverManagement = () => {
  const [drivers, setDrivers] = useState(getLocalStorage("drivers") || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const driversPerPage = 5;

  // Fetch drivers if not in localStorage
  useEffect(() => {
    if (drivers.length === 0) {
      const fetchDrivers = async () => {
        try {
          const { data } = await axios.get(
            "https://randomuser.me/api/?results=30"
          );
          setDrivers(data.results);
          setLocalStorage("drivers", data.results);
        } catch (error) {
          console.error("Error fetching drivers:", error);
        }
      };
      fetchDrivers();
    }
  }, [drivers]);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Filter drivers based on search term
  const filteredDrivers = (drivers || []).filter((driver) =>
    `${driver.name.first} ${driver.name.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalFilteredDrivers = filteredDrivers.length;
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = filteredDrivers.slice(
    indexOfFirstDriver,
    indexOfLastDriver
  );

  useEffect(() => {
    if (currentPage > Math.ceil(totalFilteredDrivers / driversPerPage)) {
      setCurrentPage(1);
    }
  }, [totalFilteredDrivers, currentPage]);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      const newPage = direction === "next" ? prevPage + 1 : prevPage - 1;
      return Math.min(
        Math.max(newPage, 1),
        Math.ceil(totalFilteredDrivers / driversPerPage)
      );
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-red-500 mb-0">
            DRIVER MANAGEMENT
          </h1>
          <p className="text-md text-gray-500">
            Data driver yang bekerja dengan Anda.
          </p>
        </div>
        <div className="flex items-center">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button className="ml-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            TAMBAH DRIVER <PlusOutlined />
          </button>
        </div>
      </div>

      {currentDrivers.length === 0 && "No data available."}
      <div className="flex overflow-x-auto space-x-10 py-4">
        <Suspense fallback={<div>Loading...</div>}>
          {currentDrivers.map((driver) => (
            <DriverCard key={driver.login.uuid} driver={driver} />
          ))}
        </Suspense>
      </div>

      {currentDrivers.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          totalDrivers={totalFilteredDrivers}
          driversPerPage={driversPerPage}
          nextPage={() => handlePageChange("next")}
          prevPage={() => handlePageChange("prev")}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default DriverManagement;
