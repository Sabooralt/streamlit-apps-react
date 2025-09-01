"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import PitchAnalysis from "./pages/pitch-analysis";
import Home from "./pages/home";
import AppsLayout from "./layout";

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    // Set initial state based on screen size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-[#0E1117]">
        <Sidebar collapsed={sidebarCollapsed} />
        <div
          className={`w-full h-screen ${sidebarCollapsed ? "ml-10" : "ml-57"}`}
        >
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/apps" element={<AppsLayout />}>
              <Route element={<PitchAnalysis />} path="/apps/pitch-analysis" />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
