"use client";
import React from "react";
import Image from "next/image";
import Person from "../../public/images/features.png";
import { Check } from "lucide-react";
import { useAOS } from "@/lib/aos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  useGSAP(()=>{
    gsap.to('.image',{
      scrollTrigger:{
        trigger:'.image',
        toggleActions:'restart restart',
      },
      rotation:360,
      duration:2
    })
  },[])
  useAOS();
  return (
    <section className="px-4 mt-10" id="Features">
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-1/2 w-full">
          <Image
            src={Person}
            width={400}
            height={400}
            alt="Feature"
            className="image"
          ></Image>
        </div>
        <div
          className="flex flex-col sm:w-1/2 w-full  justify-center items-start space-y-4 sm:mt-0 mt-8 "
          data-aos="flip-left"
        >
          <h2 className="font-bold sm:text-3xl text-2xl font-primary">
            We provide Many features you can use
          </h2>
          <ul className="space-y-2 sm:text-lg text-[15px] font-semibold text-gray-500 font-primary">
            <li className="flex items-center ">
              <Check className="check" /> A VPN encrypts your internet traffic.
            </li>
            <li className="flex items-center ">
              <Check className="check" />
              It hides your real IP address and replaces it with one from the
              VPN server.
            </li>
            <li className="flex items-center ">
              <Check className="check" />
              VPNs let you access content or websites blocked in your region.{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
