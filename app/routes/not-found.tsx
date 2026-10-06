import { Link } from "react-router";
import type { Route } from "./+types/not-found";

export const meta: Route.MetaFunction = () => [
  { title: "404 Page Not Found | React Supabase Auth Template" },
];

const NotFoundPage: React.FC = () => {
  return (
    <main>
      <section className="main-container">
        <h1 className="header-text">404 Page Not Found</h1>
        <Link to="/">Go back to Home</Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
