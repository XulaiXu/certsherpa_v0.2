import React, { useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../assets/components/sidebar";
import Header from "../assets/components/Navbar";
import Dashboard from "../views/Dashboard";
import routes from "../routes";

function Layout(props) {
  const mainPanel = useRef();

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor="white"
        activeColor="info"
      />
      <div className="main-panel" ref={mainPanel}>
        <Header {...props} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/account/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {routes.map((prop, key) => {
              if (prop.path !== "/dashboard") {
                return (
                  <Route
                    path={prop.path.replace('/', '')}
                    element={<div>Coming Soon: {prop.name}</div>}
                    key={key}
                  />
                );
              }
              return null;
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
