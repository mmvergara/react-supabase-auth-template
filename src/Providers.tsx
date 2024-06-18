import { Outlet } from "react-router-dom";
import { UserDataProvider } from "./context/AuthContext";

const Providers = () => {
  return (
    <UserDataProvider>
      <Outlet />
    </UserDataProvider>
  );
};

export default Providers;
