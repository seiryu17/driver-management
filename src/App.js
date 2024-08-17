import React from "react";
import "./style.css";
import Layout from "./components/layout/Layout";
import DriverManagement from "./components/Driver/DriverManagement";

const App = () => {
  return (
    <Layout>
      <DriverManagement />
    </Layout>
  );
};

export default App;
