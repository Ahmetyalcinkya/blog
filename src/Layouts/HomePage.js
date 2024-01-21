import React from "react";
import Header from "../Components/Header";
import PageContent from "../Components/HomePageComponents/PageContent";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="width-full flex flex-col justify-center items-center">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
};

export default HomePage;
