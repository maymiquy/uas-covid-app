import React from "react";
import Card from "../../ui/Card";
import data from "../../../utils/constants/data";

const Statistic = () => {
 const { statis } = data;
 return (
  <section
   id="statistic"
   className="w-full flex flex-col bg-zinc-100 p-12 md:p-28"
  >
   <div className="text-center">
    <h2 className="text-4xl font-bold text-primary">Statistic</h2>
    <p className="text-secondary text-lg font-semibold">
     Covid Statistic in Indonesia
    </p>
   </div>
   <div className="flex flex-col gap-4 items-center mt-14 md:justify-center md:flex-row md:space-x-4">
    {statis.map((item, index) => (
     <Card.Root
      key={index}
      className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] flex justify-center items-center"
     >
      <Card.Header
       heading={item.title}
       sub={item.value}
       subVariant={item.variant}
       className="text-4xl"
      />
     </Card.Root>
    ))}
   </div>
  </section>
 );
};

export default Statistic;
