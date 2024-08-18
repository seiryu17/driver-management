import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DriverManagement from "./pages/DriverManagement";
import Homepage from "./pages/Homepage";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drivers" element={<DriverManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
