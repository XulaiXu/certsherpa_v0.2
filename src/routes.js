import Exam_01 from "views/exam_01.jsx";

const routes = [
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
  },
  {
    path: "/exam_01",
    name: "Exam 01",
    icon: "nc-icon nc-notes",
    component: <Exam_01 />,
    layout: "/account",
  }
];

export default routes;
