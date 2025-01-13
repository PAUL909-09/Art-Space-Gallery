import NavigationBar from "../components/navigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const userLayout = () => {
  return (
    <div>
      <NavigationBar hamburgerShow={false} role="user" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default userLayout;
