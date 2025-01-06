// import all the pages here
import LoginPage from "../../app/pages/loginpage";
import landingPage from "../pages/userPage/landingPage";

// Navigation Links
export const Navigation = [
  { label: "landingPage", path: "/" },
  //{ label: "Login", path: "/" },
];

// App Routes
export const APP_ROUTES = {
  MAIN: [
    { path: "/", element: <LoginPage /> },
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
  
};    