import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    login(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="border w-1/2 mx-auto mt-4 rounded bg-green-600 min-h-content">
      <h1 className="text-3xl font-bold text-center my-4 text-white">Login </h1>
      <form className="p-6  mx-auto w-fit text-white" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label> <br />
        <input
          className="px-6 py-2 mb-4 rounded text-black"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />{" "}
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          className="px-6 py-2  rounded text-black"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />{" "}
        <div className="text-center">
          <button className="px-6 py-2 my-4 w-full rounded bg-green-500 hover:bg-green-700 text-white font-semibold">
            Login
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link
            className="underline text-blue-800 mx-auto font-semibold"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
