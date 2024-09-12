import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userinfo) //this sends post request with user data from submit.
      .then((res) => {
        //console.log(res.data);
        if (res.data) toast.success("User Signed Up successfully!");
        setTimeout(() => {
          navigate("/");
        window.location.reload();
        }, 1000);
        
        localStorage.setItem("users", JSON.stringify(res.data.user)); //to store user information in local storage
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message); // to give exact error message on alert
        }
      });
  };
  return (
    <>
      <Navbar />

      <div
        className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white
      "
      >
        <div className="modal-box dark:bg-slate-800">
          <form onSubmit={handleSubmit(onSubmit)} method="div">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-semibold text-lg">
              Welcome to <span className="text-green-600">Sign Up</span> Page!
            </h3>
            <div className="mt-8 space-y-3 ">
              <label className="form-label">Name</label>
              <input
                type="text"
                {...register("fullname", { required: true })}
                placeholder=" Enter your Name"
                className="form-control border-2 rounded dark:bg-slate-700"
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* <!-- Email input --> */}
            <div className="mt-3 space-y-3 ">
              <label className="form-label">Email address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder=" Email"
                className="form-control border-2 rounded dark:bg-slate-700"
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* <!-- password input --> */}
            <div className="mt-3 space-y-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder=" Password"
                className="form-control border-2 rounded dark:bg-slate-700"
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* <!-- Submit button --> */}
            <div className="flex justify-between mt-6">
              <button className=" bg-green-500 hover:bg-green-600 duration-200 px-2 py-1 hover:pointer  rounded-lg">
                Sign Up
              </button>

              <p>
                Have a account?{" "}
                <a
                  className="cursor-pointer underline font-semibold text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Log in!
                </a>
              </p>
              <Login />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
