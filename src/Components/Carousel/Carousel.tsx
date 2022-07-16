import { FC } from "react";
import motherboard from "../../Assets/Images/motherboard.jpg"
import sofa from "../../Assets/Images/sofa.jpg"
import iphone from "../../Assets/Images/iphone.jpg"
const Carousel:FC = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide relative h-60 md:h-80 lg:h-96 font-bold" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
        ></button>
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        ></button>
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        ></button>
    </div>
    <div className="carousel-inner relative w-full overflow-hidden h-full">
        <div className="carousel-item active relative float-left w-full h-full">
        <img
            src={motherboard}
            className="block h-full object-cover"
            alt="..."
            width={1800}
        />
        <div className="carousel-caption absolute text-left my-4">
            <h5 className="text-lg md:text-3xl overflow-y-hidden">Buy computer hardwares</h5>
            <p className="md:text-xl">under 25$</p>
            <button className="bg-black px-4 py-1 font-semibold text-xs lg:text-sm rounded-xl"><a href="#products">Shop Now!</a></button>
        </div>
        </div>
        <div className="carousel-item relative float-left w-full h-full">
        <img
            src={sofa}
            className="block  h-full object-cover"
            alt="..."
            width={1800}
        />
        <div className="carousel-caption absolute text-left my-4 xsm:mb-6">
            <h5 className="text-lg md:text-3xl overflow-y-hidden">Buy computer hardwares</h5>
            <p className="md:text-xl">under 25$</p>
            <button className="bg-black px-4 py-1 font-semibold text-xs lg:text-sm rounded-xl"><a href="#products">Shop Now!</a></button>
        </div>
        </div>
        <div className="carousel-item relative float-left w-full h-full">
        <img
            src={iphone}
            className="block h-full object-cover"
            alt="..."
            width={1800}
        />
        <div className="carousel-caption absolute text-left my-4">
            <h5 className="text-lg md:text-3xl overflow-y-hidden">Buy computer hardwares</h5>
            <p className="md:text-xl">under 25$</p>
            <button className="bg-black px-4 py-1 font-semibold text-xs lg:text-sm rounded-xl"><a href="#products">Shop Now!</a></button>
        </div>
        </div>
    </div>
    <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
    >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
    >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    {/*"https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" */}
    {/*"https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" 
    "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
    */}
    </div>
  );
};

export default Carousel;
