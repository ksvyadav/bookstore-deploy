import React from "react";
import Slider from "react-slick";
import Bookstore1 from "../../public/CAROUSAL1.png";
import Bookstore2 from "../../public/CAROUSAL2.png";
import Bookstore3 from "../../public/CAROUSAL3.png";
function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    {/* //max-w-screen-2xl container mx-auto md:px-20 px-4 */}
      <div className="hidden md:block "> 
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <a href="/course"><h3><img class="h-96 w-full " src={Bookstore1} alt="" />
              </h3></a>
            </div>
            <div>
              <h3><img class="h-96 w-full " src={Bookstore2} alt="" />
              </h3>
            </div>
            <div>
              <h3><img class="h-96 w-full " src={Bookstore3} alt="" />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Banner;
