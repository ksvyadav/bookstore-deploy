import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

import { baseUrl } from "../url.js";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Login from "./Login";
import FloatingShape from "./FloatingShape.jsx";
import PasswordStrengthMeter from "./PasswordStrengthMeter.jsx";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState("");
  const [pass, setPass] = useState(""); // for passwordstrengthmeter argument pass needs to set with password entered.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    setisLoading(true);
    await axios
      .post(`${baseUrl}/user/signup`, userinfo) //this sends post request with user data from submit.
      .then((res) => {
        //console.log(res.data);
        if (res.data) {
          setisLoading(false);
          toast.success("User Signed Up successfully!");
        }
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);

        localStorage.setItem("users", JSON.stringify(res.data.user)); //to store user information in local storage
      })
      .catch((err) => {
        if (err.response) {
          setisLoading(false);
          toast.error("Error : " + err.response.data.message); // to give exact error message on alert
        }
      });
  };
  return (
    <>
      <Navbar />

      <div
        className="flex h-screen items-center justify-center bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden
      "
      >
        <FloatingShape
          color="bg-green-500"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
        <FloatingShape
          color="bg-emerald-500"
          size="w-48 h-48"
          top="70%"
          left="80%"
          delay={5}
        />
        <FloatingShape
          color="bg-lime-500"
          size="w-32 h-32"
          top="40%"
          left="0%"
          delay={2}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-auto justify-center max-w-md w-full"
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

              <h3 className="font-semibold text-xl">
                Welcome to <span className="text-green-600">Sign Up</span> Page!
              </h3>
              <div className=" mt-8 space-y-3 ">
                <label className="form-label">Enter Following Details</label>
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                  placeholder=" Name"
                  className="max-w-md w-full form-control border-1 rounded dark:bg-slate-700"
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
                {/* <label className="form-label">Email address</label> */}
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder=" Email"
                  className="max-w-md w-full form-control border-1 rounded dark:bg-slate-700"
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
                {/* <label className="form-label">Password</label> */}
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder=" Password"
                  className="max-w-md w-full form-control border-1 rounded dark:bg-slate-700"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <PasswordStrengthMeter password={pass} />
              </div>

              {/* <!-- Submit button --> */}
              <div className="flex justify-between mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  className=" bg-green-500 hover:bg-green-600 duration-200 px-2 py-1 hover:pointer  rounded-lg"
                >
                  {isLoading ? (
                    <Loader className="w-6 h-6 animate-spin  mx-auto" />
                  ) : (
                    "Signup"
                  )}
                </motion.button>

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
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
