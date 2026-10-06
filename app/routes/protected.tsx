import { Link } from "react-router";
import { useSession } from "../context/SessionContext";
import type { Route } from "./+types/protected";

export const meta: Route.MetaFunction = () => [
  { title: "Protected Page | React Supabase Auth Template" },
];

const ProtectedPage = () => {
  const { session } = useSession();
  return (
    <main>
      <Link className="home-link" to="/">
        ◄ Home
      </Link>
      <section className="main-container">
        <h1 className="header-text">This is a Protected Page</h1>
        <p>Current User : {session?.user.email || "None"}</p>
      </section>
    </main>
  );
};

export default ProtectedPage;
