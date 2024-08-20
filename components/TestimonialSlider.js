
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';
import Image from "next/image";

// Testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam !',
  },
  {
    image: '/t-avt-3.png',
    name: 'John Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam !',
  }
];

const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Swiper
      navigation={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        modules={[Navigation, Pagination]}
        className="h-[250px] sm:h-[200px]"
      >
        {testimonialData.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="flex flex-col md:flex-row items-center gap-x-8 h-full px-16">
              {/* Avatar, Name, Position */}
              <div className='w-full max-w-[300px]  flex flex-col xl:justify-center items-center
              relative mx-auto xl:mx-0 -mb-2 '>
                <div className="flex flex-col justify-center text-center ">
                  {/* Avatar */}
                  <div className="mb-2 mx-auto">
                    <Image 
                      src={slide.image} 
                      alt={slide.name} 
                      width={96} 
                      height={96} 
                      className="w-20 h-20 rounded-full" 
                    />
                  </div>
                  {/* Name */}
                  <div className="text-lg font-semibold">{slide.name}</div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{slide.position}</div>
                </div> 
              </div>
              
              {/* Quote Icon & Message */}
              <div className="  flex-1 flex flex-col justify-center 
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute 
              xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* Quote Icon */}
                <div className="mt-2 ">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0 pl-2 " />
                </div>
                {/* Message */}
                <div className="xl:text-lg text-center md:text-left -mb-2  ">
                  {slide.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="custom-pagination swiper-pagination"></div>
      
      <style jsx>{`
        .custom-pagination {
          position: absolute;
          bottom: -25px; 
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 10;
        }
        .swiper-pagination-bullet {
          background: #e838cc;
          width: 8px;
          height: 8px;
          margin: 0 3px;
        }
        .swiper-pagination-bullet-active {
          background: #4a22bd;
        }
        @media (min-width: 1024px) {
          .custom-pagination {
            bottom: -10px; /* Adjusted to position the pagination closer to the Swiper */
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
