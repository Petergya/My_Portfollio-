
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from 'react-icons/bs';
import Image from "next/image"; 

const workSlides = [
  {
    images: [
      { title: 'title1', path: '/thumb1.jpg', url: 'https://ig.bluehouseng.com/', projectName: 'Infinity Gem' },
      { title: 'title2', path: '/thumb2.jpg', url: 'https://www.packmyload.com/', projectName: 'Pack My Load' },
      { title: 'title3', path: '/thumb3.jpg', url: 'https://www.bluehouseng.com/', projectName: 'Bluehouse Site' },
      { title: 'title4', path: '/thumb4.jpg', url: 'https://www.plugbay.com/en', projectName: 'Plugbay Business Listing Site' },
    ],
  },
  {
    images: [
      { title: 'title5', path: '/thumb4.jpg', url: '/your-link5', projectName: 'Project 5' },
      { title: 'title6', path: '/thumb1.jpg', url: '/your-link6', projectName: 'Project 6' },
      { title: 'title7', path: '/thumb2.jpg', url: '/your-link7', projectName: 'Project 7' },
      { title: 'title8', path: '/thumb3.jpg', url: '/your-link8', projectName: 'Project 8' },
    ],
  },
];

const WorkSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: '.custom-pagination', 
        }}
        modules={[Pagination]}
        className="h-[150px] sm:h-[200px] lg:h-[340px]"
      >
        {workSlides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="relative grid grid-cols-2 gap-2 sm:gap-4 cursor-pointer w-full h-full">
              {slide.images.map((image, imgIndex) => (
                <div key={imgIndex} className="relative w-full h-full overflow-hidden flex items-center justify-center group">
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image src={image.path} layout="fill" objectFit="cover" alt={image.title} />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* Title, Project Name, and Icon Row */}
                  <div className="absolute bottom-0 inset-0 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-700 p-2 sm:p-4">
                    {/* Project Name with individual word animation */}
                    <div className="flex flex-row space-x-2 items-center">
                      {image.projectName.split(' ').map((word, wordIndex) => (
                        <a 
                          key={wordIndex}
                          href={image.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-sm sm:text-xl font-bold transition-transform duration-500 delay-${wordIndex * 300} group-hover:translate-y-0 translate-y-full`}
                        >
                          {word}
                        </a>
                      ))}
                    </div>
                    {/* Title Part 2 */}
                    <div 
                      className={`text-[13px] sm:text-lg tracking-[0.2em] transition-transform duration-500 delay-${(image.projectName.split(' ').length) * 300} group-hover:translate-y-0 translate-y-full`}
                    >
                      {/* title part 2 */}
                    </div>
                    {/* Icon */}
                    <div 
                      className={`text-lg sm:text-3xl transition-transform duration-500 delay-${(image.projectName.split(' ').length + 1) * 300} group-hover:translate-y-0 translate-y-full`}
                    >
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0
                      transition-all duration-300 delay-200">
                        <BsArrowRight />
                        </div>
                    </div>
                  </div>
                </div>
              ))}
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
          z-index: 10; /* Ensure it's above other content */
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
        @media (min-width: 1024px) { /* Large screen breakpoint */
          .custom-pagination {
            bottom: -38px; /* Reduced space from the Swiper on larger screens */
          }
        }
      `}</style>
    </div>
  );
};

export default WorkSlider;
