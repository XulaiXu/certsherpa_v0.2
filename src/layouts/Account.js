import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Dashboard from "views/Dashboard.js";
import Exam_01 from "views/exam_01.js";

import routes from "routes.js";

var ps;

function AccountLayout(props) {
  console.log('AccountLayout rendering');
  const mainPanel = React.useRef();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  console.log('AccountLayout - Auth state:', { isAuthenticated: isAuthenticated() });
  console.log('AccountLayout - Location:', location);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });

  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor="white"
        activeColor="info"
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/account/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exam_01" element={<Exam_01 />} />
            {routes.map((prop, key) => {
              if (prop.path !== "/dashboard") {
                return (
                  <Route
                    path={prop.path.replace('/', '')}
                    element={prop.component}
                    key={key}
                  />
                );
              }
              return null;
            })}
          </Routes>
        </div>
        <Footer fluid />
      </div>
    </div>
  );
}

export default AccountLayout;
