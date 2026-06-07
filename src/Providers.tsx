import { Outlet } from "react-router-dom";
import { SessionProvider } from "./context/SessionProvider";

const Providers = () => {
  return (
    <SessionProvider>
      <Outlet />
    </SessionProvider>
  );
};

export default Providers;
