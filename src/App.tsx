import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/components/layout/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
