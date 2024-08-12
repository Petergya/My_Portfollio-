

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination', 
        }}
        modules={[FreeMode, Pagination]}
        className="h-[150px] sm:h-[300px] lg:h-[340px]"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 
              group cursor-pointer hover:bg-[rgba(89,65,189,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 font-bold">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent
                  transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination swiper-pagination"></div>
      <style jsx>{`
        .custom-pagination {
          position: relative;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: px; /* Reduced space for larger screens */
          z-index: 10;
        }
        .swiper-pagination-bullet {
          background: var(--accent-color); /* Use accent color */
          width: 8px;
          height: 8px;
          margin: 0 3px;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-color); /* Active dot color */
        }
        @media (min-width: 1024px) { /* Large screen breakpoint */
          .custom-pagination {
            top: -50px; /* Reduced space from the Swiper on larger screens */
          }
        }
      `}</style>
    </>
  );
};

export default ServiceSlider;

