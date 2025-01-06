import { Navigate, Outlet } from "react-router-dom";

//  Replace with real authentication check
// const isAuthenticated = () => {
  
//   return Boolean(localStorage.getItem("userToken")); // Adjust based on your auth logic
// };


//temportary
const isAuthenticated = () => {
  return true;
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
