import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (

    <>

    <div className='bg-[#E1F2F4]'>
    <div className="carousel w-full">
      <Slider {...settings}>
        <div className="carousel-item">
          <img
            src="https://media.idownloadblog.com/wp-content/uploads/2022/09/iPhone-14-Pro-wallpaper-mockup-hero-idownloadblog.jpg"
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://image-us.samsung.com/SamsungUS/samsungbusiness/samsung-ads/sa-home-samsung-tv-plus.jpg?$bu-inset-features-mobile-jpg$"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.dribbble.com/users/5739021/screenshots/16801648/hp-pavilion-gaming-laptop-advertisement-poster-design-2.jpg"
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/blog/2022/PEAS-banner.jpg"
            alt="Slide 4"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>


    <div className='flex flex-row m-[50px]'>

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src="https://www.apple.com/v/watch/aq/images/meta/gps-lte/og__n5qzveqr596m.png"
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-[35px]">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Second star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Third star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fourth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        5.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        $599
      </span>
      <a
        href="#"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </a>
    </div>
  </div>
</div>


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-5">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/AISExports_UK_GW/Desktop/AIS_GW_DESKTOP_CATCARD_BASICS_758X608._SY608_CB642486353_.jpg"
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      Amazon Basics
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
 
    </div>
 
  </div>
</div>


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-5">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src=" https://images-eu.ssl-images-amazon.com/images/G/02/AISExports_UK_GW/Desktop/AIS_GW_DESKTOP_CATCARD_BOOKS_758x608._SY608_CB642486522_.jpg"
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      Amazon Basics
      </h5>
      <h5>Buy amazing books from amazon with student discounts upto 20% off.</h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
 
    </div>
 
  </div>
</div>





</div>

</div>





    </>
  );
};

export default Main;
