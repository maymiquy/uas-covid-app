import React from "react";
import SvgHero from "../../ui/SvgHero";
import Button from "../../ui/Button";

const Hero = () => {
 return (
  <section id="home" className="bg-white w-full p-20 md:p-24">
   <div className="md:grid-cols-[0.6fr_0.6fr] md:grid flex flex-col-reverse items-center justify-between">
    <div className="flex flex-col justify-center gap-4 md:w-[65%] mt-10 md:mt-0">
     <div className="space-y-4">
      <h2 className="text-4xl md:text-5xl font-semibold text-primary">
       Covid ID
      </h2>
      <p className="text-secondary text-lg md:text-xl font-semibold">
       Covid Monitoring
      </p>
     </div>
     <p className="text-gray-500 mt-4 text-md text-justify md:text-xl font-medium">
      Our app is a relevant data in Indonesia with the latest data from WHO and
      CDC. Our app is helping people to get information about covid in Indonesia
      and stay safe.
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
