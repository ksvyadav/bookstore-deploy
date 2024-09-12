import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        //console.log(res.data)
        setbook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  //console.log(book)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className=" mt-8 font-bold text-xl">Freely Offered e-Books</h1>
          <p className="mt-3">
            Enjoy the latest free titles in different genres. Rediscover beloved
            literary works at no cost.
          </p>
        </div>
        <div className="slider-container">
          <div>
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
          <div className="mt-8" style={{ textAlign: "center" }}>
            <button className="button mx-4" onClick={play}>
              <img
                className="h-5 w-5 hover:scale-125 duration-100"
                src={
                  "https://img.icons8.com/?size=80&id=nMSSSpYre8pz&format=png"
                }
              />
            </button>
            <button className="button mx-4" onClick={pause}>
              <img
                className="h-5 w-5 hover:scale-125 duration-100"
                src={
                  "https://img.icons8.com/?size=48&id=bBryBDQG6NDr&format=png"
                }
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
