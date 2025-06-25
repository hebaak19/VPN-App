"use client";
import React from "react";
import Image from "next/image";
import User from "../../public/images/user.png";
import Location from "../../public/images/location.png";
import Server from "../../public/images/storage.png";
import { useAOS } from "@/lib/aos";
const Statics = () => {
  useAOS();
  return (
    <section className="px-4 my-6 " data-aos="zoom-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-4  items-center sm:justify-around ">
          <div className="flex flex-row space-x-5 items-center">
            <div className="rounded-full bg-rose-200 p-4">
              <Image
                src={User}
                width={40}
                height={40}
                className="shrink-0"
                alt="User"
              ></Image>
            </div>
            <div className="">
              <span className="font-bold text-shadow-indigo-950 text-lg sm:text-2xl">
                90+
              </span>
              <h3 className="text-gray-500">Users</h3>
            </div>
          </div>
          <div className="flex flex-row space-x-5 items-center">
            <div className="rounded-full bg-rose-200 p-4">
              <Image
                src={Location}
                alt="User"
                width={40}
                height={40}
                className="shrink-0"
              ></Image>
            </div>
            <div className="">
              <span className="font-bold text-shadow-indigo-950 text-lg sm:text-2xl">
                30+
              </span>
              <h3 className="text-gray-500">Location</h3>
            </div>
          </div>
          <div className="flex flex-row space-x-5 items-center">
            <div className="rounded-full bg-rose-200 p-4">
              <Image
                src={Server}
                width={40}
                height={40}
                className="shrink-0"
                alt="User"
              ></Image>
            </div>
            <div className="">
              <span className="font-bold text-shadow-indigo-950 text-lg sm:text-2xl">
                50+
              </span>
              <h3 className="text-gray-500">Servers</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statics;
