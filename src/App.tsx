import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import FraudPrevention from "./pages/FraudPrevention";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<FraudPrevention />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
