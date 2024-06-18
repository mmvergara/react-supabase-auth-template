import { Link } from "react-router-dom";
import { useUser } from "../context/AuthContext";

const ProtectedPage = () => {
  const { user } = useUser();
  return (
    <main>
      <Link className="home-link" to="/">
        ◄ Home
      </Link>
      <section className="main-container">
        <h1 className="header-text">This is a Protected Page</h1>
        <p>Current User : {user?.displayName || "None"}</p>
      </section>
    </main>
  );
};

export default ProtectedPage;
