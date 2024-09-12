import React from "react";
import openbook from "../../public/OPENBOOKABOUT.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
function About() {
  return (
    <>
      <Navbar/>
      <div class="relative bg-gray-900 overflow-hidden">
        <img
          src={openbook}
          alt="About Our Bookstore"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-gray-900/75"></div>

        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Our Bookstore
            </h2>
            <p class="mt-4 text-lg text-gray-300">
              We're a dedicated team of book lovers passionate about bringing
              you the best reading experience.
            </p>

            <dl class="mt-12 space-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-white">
                    Our Mission
                  </p>
                </dt>
                <dd class="ml-16 text-base text-gray-300">
                  To provide readers with access to a vast and diverse
                  collection of e-books, fostering a love for reading and
                  lifelong learning.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-white">
                    Our Team
                  </p>
                </dt>
                <dd class="ml-16 text-base text-gray-300">
                  We're a dedicated team of book lovers passionate about
                  bringing you the best reading experience.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-white">
                    Our Values
                  </p>
                </dt>
                <dd class="ml-16 text-base text-gray-300">
                  <ul class="list-disc space-y-2">
                    <ul>Customer Satisfaction</ul>
                    <ul>Quality Content</ul>
                    <ul>Innovation</ul>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
