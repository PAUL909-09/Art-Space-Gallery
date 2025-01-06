import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "../src/app/routes/routes"

const router = createBrowserRouter(Routes);
const Router = () => {
  return (
    <>
    <div className="font-Montserrat">
      <RouterProvider router={router} />
      </div>
    </>
  );
};
export default Router;
