"use client";
import React from "react";
import { useAOS } from "@/lib/aos";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(SplitText);
const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    const split = SplitText.create(".hero", { type: "words" });
    tl.from(split.words, {
      y: 100,
      stagger: 0.2,
    }).from(".hero", { color: "#ED3500" });
  }, []);

  useAOS();
  return (
    <div className="flex flex-col sm:flex-row px-4 mt-10 mb-20 " id="About">
      <div
        className=" w-full sm:w-1/2 items-start space-y-6 mt-4"
        data-aos="fade-right"
      >
        <h1 className=" hero_heading hero ">
          Want anything to be easy with VPN
        </h1>
        <p className=" leading-relaxed text-[15px] md:text-[25px] lg:text-xl para font-primary">
          A VPN, or Virtual Private Network, is a service that creates a secure,
          encrypted connection over the internet.
        </p>
        <button className="get_started">Get Started</button>
      </div>
      <div className=" flex  w-full sm:w-1/2  justify-center items-center mt-8">
        <iframe
          width="560"
          height="315"
          className="border-1 rounded-lg"
          src="https://www.youtube.com/embed/_wQTRMBAvzg?si=WvhnnGgwCeKUoaZI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
