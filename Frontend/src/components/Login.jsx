import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

import { baseUrl } from "../url";

function Login() {
  const [isLoading, setisLoading] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    const email = data.email;
    const password = data.password;

    setisLoading(true);
    await axios
      .post(`${baseUrl}/user/login`, { email, password }) //this sends post request with user data from submit.
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          setisLoading(false);
          document.getElementById("my_modal_3").close();
          toast.success("User Logged In successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          navigate("/");
          localStorage.setItem("users", JSON.stringify(res.data.user)); //to store user information in local storage
        }
      })
      .catch((err) => {
        if (err.response) {
          setisLoading(false);
          toast.error("Error : " + err.response.data.message); // to give exact error message on alert
          setTimeout(() => {}, 1000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>{" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-semibold text-lg">
              Welcome to <span className="text-green-600">Login</span> Page!
            </h3>
            {/* <!-- Email input --> */}
            <div className="mt-8 space-y-3 ">
              <label className="form-label">Email address</label>
              <input
                type="email"
                placeholder=" Email"
                className="max-w-md w-full form-control border-1 rounded dark:bg-slate-700"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* <!-- password input --> */}
            <div className=" space-y-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder=" Password"
                className="max-w-md w-full form-control border-1 rounded dark:bg-slate-700"
                {...register("password", { required: true })}
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
              <motion.button
                className=" bg-green-500 hover:bg-green-600 duration-200 px-2 py-1 hover:pointer  rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-6 h-6 animate-spin  mx-auto" />
                ) : (
                  "Login"
                )}
              </motion.button>
              <p>
                Not Registered?{" "}
                <a
                  href="/Signup"
                  className="cursor-pointer underline font-semibold text-blue-500"
                >
                  Sign Up!
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
