// import all the pages here
import LandingPage from "../pages/userPage/landingPage";
import ExhibitPage from "../pages/userPage/exhibitPage";

export const Navigation = [
  { label: "landingPage", path: "/" },
  { label: "exhibitPage", path: "/exhibitPage" },
];

// App Routes
export const APP_ROUTES = {
  MAIN: [
    { path: "/", element: <LandingPage /> },
    { path: "/exhibitPage", element: <ExhibitPage /> },
  ],
  ADMIN: [
    // { path: "/Dashboard", element: <DashboardPage/> },
  ],
};

// API Endpoints
export const API_ENDPOINTS = {
  USER: {
    GET_ALL: "api/user/get/all",
    GET: "api/user/get/:id",
    CREATE: "api/user/create",
    UPDATE: "api/user/update",
    DELETE: "api/user/delete/:id",
  },
};

export const APP_COLORS = {
  primary: "bg-[#FAF9F6]",
  secondary: "bg-[#C62A35]",
};
