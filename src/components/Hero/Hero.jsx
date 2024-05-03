import React from "react";
import SvgHero from "../ui/SvgHero";
import Button from "../ui/Button";

const Hero = () => {
 return (
  <section className="bg-white w-full border py-14 px-24">
   <div className="md:grid-cols-[0.6fr_0.6fr] md:grid flex flex-col-reverse items-center justify-between">
    <div className="flex flex-col justify-center gap-4 md:w-[65%] mt-10 md:mt-0">
     <div className="space-y-4">
      <h2 className="text-4xl md:text-6xl font-bold text-primary">Covid ID</h2>
      <p className="text-secondary text-lg md:text-xl font-semibold">
       Monitoring Perkembangan Covid
      </p>
     </div>
     <p className="text-gray-500 mt-4 text-md md:text-xl font-medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since.
     </p>
     <Button title="Vaccine" className="w-1/2 mt-4" />
    </div>
    <div className="mt-6 flex justify-center md:mt-0 overflow-hidden">
     <SvgHero className="w-[450px] h-[220px]" />
    </div>
   </div>
  </section>
 );
};

export default Hero;
