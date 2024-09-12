import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Cards from "../components/Cards.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function courses() {
  // console.log(list)
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        //console.log(res.data)
        setbook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <h1 className="mt-3 font-semibold text-center text-2xl">
            Our Popular <span className="text-pink-500 font-bold">e-Books</span>
          </h1>
          <p className="mt-3">
            Find top-selling e-books in genres like thriller, romance, and
            science fiction. Explore e-books available only through our
            platform. Take advantage of discounts and promotions on selected
            e-books.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              <button className=" mt-3 px-2 py-1 hover:bg-pink-500 duration-300 hover:text-white bg-pink-300 text-black rounded-xl font-semibold">
                Back
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default courses;
