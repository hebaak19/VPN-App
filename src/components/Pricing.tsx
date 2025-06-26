"use client";
import React from "react";
import Image from "next/image";
import Box from "../../public/images/box.png";
import { Check } from "lucide-react";
import { pricing } from "@/data/pricing";
const Pricing = () => {
  return (
    <section className="px-4 mt-14 flex flex-col items-center " id="Pricing">
      <div className="flex space-y-2 flex-col items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Choose Your Plan</h1>
        <p className="font-primary">Explore different plans that suits you!</p>
      </div>
      <div className="flex md:flex-row flex-col space-x-6 justify-around w-full mt-14 ">
        {pricing.map((card, index) => (
          <div key={index} className="pricing_card">
            <Image src={Box} alt="box" width={100} height={100} />
            <h2 className="font-bold text-2xl">{card.title}</h2>
            <ul className="pricing_list">
              <li className="flex items-center">
                <Check className="check" />
                {card.features[0]}
              </li>
              <li className="flex items-center">
                <Check className="check" />
                {card.features[1]}
              </li>
              <li className="flex items-center">
                <Check className="check" />
                {card.features[2]}
              </li>
            </ul>
            <button className="select_btn">Select</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
