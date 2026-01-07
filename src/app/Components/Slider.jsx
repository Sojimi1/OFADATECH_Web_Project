"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import osf from "../../../public/Assets/Home/osf.jpg";
import img2 from "../../../public/Assets/Home/ofada_school.jpg";
import img3 from "../../../public/Assets/Home/electrical.jpg";
import fd from "../../../public/Assets/Home/school3.jpg";
import summer from "../../../public/Assets/Home/new_building.jpg";
import welcome from "../../../public/Assets/Home/Wb.png";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
 
const Slider = () => {
  return (
    <>
      <div className=" w-full ">
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
              <Image
                src={summer}
                alt="slider"
                className="w-full object-cover absolute h-full top-0 left-0"
              />
              <div className="relative z-10 flex items-center justify-center flex-col">
                <p className="text-white text-center text-lg font-medium">
                  Join the train of entrepreneur
                </p>
                <h2 className="font-bold text-center py-6 md:text-6xl text-3xl text-[#109de4]">
                  TO ESCAPE POVERTY
                </h2>
                <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">
                  About Us
                </button>
              </div>
            </div>
          </SwiperSlide>



<SwiperSlide>
            <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
              <Image
                src={welcome}
                alt="slider"
                className="w-full object-cover absolute h-full top-0 left-0"
              />
              <div className="relative z-10 flex items-center justify-center flex-col">
               
    
              </div>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
              <Image
                src={osf}
                alt="slider"
                className="w-full object-cover absolute h-full top-0 left-0"
              />
              <div className="relative z-10 flex items-center justify-center flex-col">
                <p className="text-white text-center text-lg font-medium bg-black/70 px-4 py-2 rounded">
                  With enhanced income opportunities
                </p>
                <h2 className="font-bold text-center py-6 md:text-5xl text-3xl text-[#109de4] bg-black/90 px-4 py-2 rounded-[50px]">
                 ...Trained over 200 students.
                </h2>
                <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">
                  About Us
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
              <Image
                src={fd}
                alt="slider"
                className="w-full object-cover absolute h-full top-0 left-0"
              />
              <div className="relative z-10 flex items-center justify-center flex-col">
                <p className="text-white text-center text-lg font-medium">
                  Join the train of entrepreneur
                </p>
                <h2 className="font-bold text-center py-6 md:text-5xl text-3xl text-[#109de4] bg-black/90 px-4 py-2 rounded-[50px]">
                  GARMENT MAKING
                </h2>
                <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">
                  About Us
                </button>
              </div>
            </div>
          </SwiperSlide>
    
          
          <SwiperSlide>
            <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
              <Image
                src={img3}
                alt="slider"
                className="w-full object-cover absolute h-full top-0 left-0"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-[#0000007d]"></div>
              <div className="relative z-10 flex items-center justify-center flex-col">
                   <p className="text-white text-center text-lg font-medium">
                  Join the train of entrepreneur
                </p>
                <h2 className="font-bold text-center py-6 md:text-6xl text-3xl text-[#109de4]">
                  Electrical/Electronics
                </h2>
                <button className="bg-white border font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">
                  About Us
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
