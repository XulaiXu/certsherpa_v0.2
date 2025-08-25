import React, { useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../assets/components/sidebar";
import Header from "../assets/components/Navbar";
import Footer from "./Footer";
import Dashboard from "../views/Dashboard";
import PracticeTests from "../views/PracticeTests";
// import routes from "../routes"; // Removed import

function Layout() {
  const mainPanel = useRef();

  return (
    <div className="wrapper">
      <Sidebar
        routes={[ // Hardcoded routes
          {
            path: "/dashboard",
            name: "Dashboard",
            icon: "nc-icon nc-chart-pie-35",
            layout: "/account"
          },
          {
            path: "/profile",
            name: "Profile",
            icon: "nc-icon nc-single-02",
            layout: "/account"
          },
          {
            path: "/study-materials",
            name: "Study Materials",
            icon: "nc-icon nc-book-bookmark",
            layout: "/account"
          },
          {
            path: "/progress",
            name: "Progress",
            icon: "nc-icon nc-chart-bar-32",
            layout: "/account"
          },
          {
            path: "/practice-tests",
            name: "Practice Tests",
            icon: "nc-icon nc-paper",
            layout: "/account"
          },
          {
            path: "/settings",
            name: "Settings",
            icon: "nc-icon nc-settings-gear-65",
            layout: "/account"
          }
        ]}
        bgColor="white"
        activeColor="info"
      />
      <div className="main-panel" ref={mainPanel} style={{ minHeight: '100vh', position: 'relative' }}>
        <Header />
        <div className="content" style={{ paddingBottom: '80px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/account/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<div>Coming Soon: Profile</div>} />
            <Route path="/study-materials" element={<div>Coming Soon: Study Materials</div>} />
            <Route path="/progress" element={<div>Coming Soon: Progress</div>} />
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/settings" element={<div>Coming Soon: Settings</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
