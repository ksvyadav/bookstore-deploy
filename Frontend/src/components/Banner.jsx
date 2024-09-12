import React from "react";
import main from "../../public/main.png";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <h1 className="px-7 text-3xl md:text-5xl font-bold mt-8 flex justify-center">
         Hello! Browse Our Expansive Library
      </h1>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-2/3">
          <div className=" space-y-8 md:space-y-12 mt-6 md:mt-24">
            <div class="container mx-auto">
              {/* <div class="grid grid-cols-3 gap-8"> */}
              <div className="slider-container ">
                <Slider {...settings}>
                  <div className="card shadow-xl scale-90 hover:scale-100 duration-300">
                    <div className="card-body">
                      <h2 class="text-2xl font-bold mb-4">Fiction</h2>
                      <p class="mb-4">
                        Explore a world of fantasy, romance, and adventure.
                      </p>
                      <ul class="list-disc ml-8">
                        <li>The Last Thing He Told Me</li>
                        <li>The House in the Cerulean Sea</li>
                        <li>The Invisible Life of Addie LaRue</li>
                      </ul>
                    </div>
                  </div>
                  <div className=" card shadow-xl scale-90 hover:scale-100 duration-300">
                    <div className="card-body">
                      <h2 class="text-2xl font-bold mb-4">Non-Fiction</h2>
                      <p class="mb-4">
                        Discover insightful stories and compelling perspectives.
                      </p>
                      <ul class="list-disc ml-8">
                        <li>Sapiens: A Brief History of Humankind</li>
                        <li>The Power of Habit</li>
                        <li>Educated</li>
                      </ul>
                    </div>
                  </div>
                  <div className=" card shadow-xl scale-90 hover:scale-100 duration-300">
                    <div className="card-body">
                      <h2 class="text-2xl font-bold mb-4">Children's</h2>
                      <p class="mb-4">
                        Spark imagination and creativity with captivating tales.
                      </p>
                      <ul class="list-disc ml-8">
                        <li>The Wonderful Things You Will Be</li>
                        <li>The Very Hungry Caterpillar</li>
                        <li>Where the Wild Things Are</li>
                      </ul>
                    </div>
                  </div>
                </Slider>
              </div>
              {/*  */}
              {/* </div> */}
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <a href="/course"><button className=" btn btn-secondary">Getting Started</button></a>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/3">
          <img
            src={main}
            className=" ml-10 mt-6 md:my-24 md:mt-24 w-72 h-72 md:w-72 md:h-72"
            alt="BookStore"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
