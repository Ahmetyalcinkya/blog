import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewBlogPageContent from "../Components/NewBlogPageComponents/NewBlogPageContent";

const NewBlogPage = () => {
  return (
    <div>
      <Header />
      <NewBlogPageContent />
      <Footer />
    </div>
  );
};

export default NewBlogPage;
