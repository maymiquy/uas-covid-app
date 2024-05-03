import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import Hero from "../../components/Hero/Hero";

function HomePage() {
 return (
  <>
   <HomeLayout>
    <Hero />
    <section>About</section>
    <section>Table</section>
    <section>Form</section>
   </HomeLayout>
  </>
 );
}

export default HomePage;
