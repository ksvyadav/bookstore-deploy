import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../url.js";

function Contact() {
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
      message: data.message,
    };
    const usermailinfo = {
      access_key:"641b23b1-6838-4f74-9997-a71a4beb192e",
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };
    //console.log(data);
    await axios .post("https://api.web3forms.com/submit", usermailinfo)
    await axios 
      .post(`${baseUrl}/contact/`, userinfo) //this sends post request with user data from submit.
      .then((res) => {
        console.log(res.data);
        if (res.data) toast.success("Your Message Saved successfully!");
        setTimeout(() => {
        window.location.reload();
        }, 1000);
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

      <div className="h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex h-screen items-center justify-center">
          <div className="w-full max-w-xs">
            <h3 className="font-semibold text-4xl">Contact Us</h3>
            <form onSubmit={handleSubmit(onSubmit)} method="div">
            <div className="mt-8 space-y-3 ">
              <label class="form-label">Name</label>
              <input
                type="text"
                {...register("fullname", { required: true })}
                placeholder="Name"
                class=" w-full max-w-xs form-control textarea textarea-bordered rounded dark:bg-slate-700"
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
              <label class="form-label">Email address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder=" Email"
                class="w-full max-w-xs form-control textarea textarea-bordered rounded dark:bg-slate-700"
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* <!-- message input --> */}
            <div className="mt-3 space-y-3">
              <label class="form-label">Message</label>
              <br />
              <textarea
              {...register("message", { required: true })}
                placeholder="Write your message"
                className="textarea textarea-bordered textarea-md w-full max-w-xs border-2 dark:bg-slate-700"
              ></textarea>
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <button className="mt-3 btn bg-slate-600 text-white dark:bg-slate-600">
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
