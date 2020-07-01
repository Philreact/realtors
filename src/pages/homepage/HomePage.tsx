import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Realtors from "../../components/Realtors/Realtors";
import Features from "../../components/Features/Features";
import Story from "../../components/Story/Story";
import Homes from "../../components/Homes/Homes";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../hoc/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
