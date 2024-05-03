import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import Hero from "../../components/partials/Hero/Hero";
import Statistic from "../../components/partials/Statistic/Statistic";
import Province from "../../components/partials/Province/Province";
import Forms from "../../components/partials/Forms/Forms";

function HomePage() {
 return (
  <>
   <HomeLayout>
    <Hero />
    <Statistic />
    <Province />
    <Forms />
   </HomeLayout>
  </>
 );
}

export default HomePage;
