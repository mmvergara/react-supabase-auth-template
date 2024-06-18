import { Link } from "react-router-dom";

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
