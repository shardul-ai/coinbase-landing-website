import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DailyPrices from "./components/DailyPrice";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import SignUp from "./components/SignUp";
import Roadmap from "./components/Roadmap";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function app() {
    return(
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Service />
      <SignUp />
      <Roadmap />
      <Newsletter />
      <Footer/>
      <ScrollToTop/>

    </div>
    );
}