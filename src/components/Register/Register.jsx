import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const Register = () => {
const {createUser} = useContext(AuthContext)
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // console.log(user);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Account created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.log(error);
      });
      form.reset()
      navigate('/login')
  };

  return (
    <div className="border w-1/2 mx-auto mt-4 rounded bg-green-600 min-h-content">
      <h1 className="text-3xl font-bold text-center my-4 text-white">
        Register{" "}
      </h1>
      <form
        className="p-6  mx-auto w-fit text-white"
        onSubmit={handleSubmit}
      >
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
          className="px-6 py-2   rounded text-black"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />{" "}
        <div className="text-center">
          <button className="px-6 py-2 my-4 w-full rounded bg-green-500 hover:bg-green-700 text-white font-semibold">
            Register
          </button>
        </div>
        <p>Already have an account? <Link className="underline text-blue-800 mx-auto font-semibold" to={"/login"}>Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
