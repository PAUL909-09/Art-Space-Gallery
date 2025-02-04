import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "../components/User/navigationBar";
import Footer from "../components/User/footer";

const UserLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location.pathname]); // Runs whenever the pathname changes

  return (
    <div>
      <NavigationBar hamburgerShow={false} role="user" />
      <div className="mt-20"> {/* Prevent navbar from covering content */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
