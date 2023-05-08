import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import Photo from "../public/assets/photo1.avif";
import Hello2 from "../public/assets/photo2.avif";
import Hello3 from "../public/assets/photo3.avif";
import Hello4 from "../public/assets/photo4.avif";
import Button from "./Button";

const categories = [
  {
    name: "Photo1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Photo,
    btnText: "Explore",
  },

  {
    name: "Hello2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Hello2,
    btnText: "Explore",
  },

  {
    name: "Hello3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Hello3,
    btnText: "Explore",
  },

  {
    name: "Hello4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Hello4,
    btnText: "Explore",
  },
];

const CategorieSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
      }}
      className="categorieSlider min-h-[660px]"
    >
      {categories.map((categorie, index) => {
        return (
          <>
            <SwiperSlide
              className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10"
              key={index}
            >
              <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-16">
                <Image src={categorie.image} height={400} width={300} />
                <div className="flex flex-col gap-y-5">
                  <div className="text-2xl font-medium flex gap-x-2 items-center">
                    {categorie.name}
                    <div className="h-[3px] w-[40px] bg-pink-400 rounded"></div>
                  </div>
                  <div className="text-[20px] text-gray-600">
                    {categorie.description}
                  </div>
                  <div>
                    <Button link="#" text={categorie.btnText} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default CategorieSlider;
