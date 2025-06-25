"use client";
import React from "react";
import Image from "next/image";
import { users } from "@/data/users";
import star from "../../public/images/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  return (
    <section className="px-4 flex flex-col items-center mt-14 mb-10 relative" id="Testimonials">
      <div className=" flex space-y-2 flex-col items-center">
        <h1 className="font-bold md:text-4xl text-2xl">
          Trusted By Thousands Of Customers
        </h1>
        <p className="text-gray-500 text-lg">
          These are the stories of our customers
          <br /> who have been using this crazy feature
        </p>
      </div>
      <div className="flex flex-row  w-full  mt-10 ">
        <Swiper
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Grid, Pagination]}
          className="mySwiper  "
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="customer_card  ">
                <div className="space-x-6 pb-6">
                  <div className="flex flex-row space-x-3">
                    <Image
                      src={user.image}
                      width={55}
                      height={55}
                      alt="user"
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="font-semibold text-lg">{user.name}</h2>
                      <span className="text-gray-400 text-[15px]">
                        {user.job}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="sm:text-[14px] text-[17px]">{user.review}</p>
                <p className="star">
                  {user.rating}
                  <Image src={star} width={15} height={15} alt="star" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
