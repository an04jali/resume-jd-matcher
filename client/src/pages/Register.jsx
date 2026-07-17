import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post("/auth/register", formData);

      // Save JWT
      localStorage.setItem("token", res.data.token);

      alert("Registration Successful!");

      // Redirect to Dashboard
      navigate("/dashboard");

    } catch (err) {

      alert(err.response.data.message);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-96"
      >

        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <input
          className="border w-full p-3 mt-6 rounded"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <input
          className="border w-full p-3 mt-4 rounded"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          className="border w-full p-3 mt-4 rounded"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <button
          className="w-full bg-blue-600 text-white py-3 mt-6 rounded"
        >
          Register
        </button>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Register;