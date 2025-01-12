import { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "../config/config";
import LandingPage from "../pages/userPage/landingPage";
import PrivateRoute from "../config/privateRoute";
import AdminLayout from "../layout/adminLayout";
import UserLayout from "../layout/userLayout";
import ArtistLayout from "../layout/artistLayout";

const Routes: RouteObject[] = [
  {
    path: "*",
    element: (
      <>
        <h1>error 404</h1>
      </>
    ),
  },
  {
    element: <UserLayout />,
    children: APP_ROUTES.MAIN,
  },
  {
    element: <PrivateRoute />, // Protect ADMIN routes
    children: [
      {
        element: <AdminLayout />,
        children: APP_ROUTES.ADMIN,
      },
    ],
  },
  {
    element: <PrivateRoute />, // Protect Artist routes
    children: [
      {
        element: <ArtistLayout />,
        children: APP_ROUTES.ARTIST,
      },
    ],
  },
];

export default Routes;
