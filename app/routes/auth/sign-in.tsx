import { useState } from "react";
import { Link, Navigate } from "react-router";
import { useSession } from "../../context/SessionContext";
import supabase from "../../supabase";
import type { Route } from "./+types/sign-in";

export const meta: Route.MetaFunction = () => [
  { title: "Sign In | React Supabase Auth Template" },
];

const SignInPage = () => {
  // ==============================
  // If user is already logged in, redirect to home
  // This logic is being repeated in SignIn and SignUp..
  // maybe we can create a wrapper component for these pages
  // just like the routes/auth-protected-layout.tsx? up to you.
  // ==============================
  const { session } = useSession();
  const [status, setStatus] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  if (session) return <Navigate to="/" />;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Logging in...");
    const { error } = await supabase.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password,
    });
    if (error) {
      alert(error.message);
    }
    setStatus("");
  };
  return (
    <main>
      <Link className="home-link" to="/">
        ◄ Home
      </Link>
      <form className="main-container" onSubmit={handleSubmit}>
        <h1 className="header-text">Sign In</h1>
        <input
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <Link className="auth-link" to="/auth/sign-up">
          Don't have an account? Sign Up
        </Link>
        {status && <p>{status}</p>}
      </form>
    </main>
  );
};

export default SignInPage;
