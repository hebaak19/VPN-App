"use client";
import React from "react";
import Image from "next/image";
import { statics } from "@/data/statics";
import { useAOS } from "@/lib/aos";
const Statics = () => {
  useAOS();
  return (
    <section className="px-4 my-6 " data-aos="zoom-in">
      <main className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-4  items-center sm:justify-around ">
          {statics.map((element, index) => (
            <div key={index} className="flex items-center space-x-5">
              <div className="rounded-full bg-rose-200 p-4">
                <Image
                  src={element.image}
                  width={40}
                  height={40}
                  className="shrink-0"
                  alt="User"
                />
              </div>
              <div>
                <span className="font-bold text-shadow-indigo-950 text-lg sm:text-2xl">
                  {element.number}
                </span>
                <h3 className="text-gray-500">{element.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Statics;
