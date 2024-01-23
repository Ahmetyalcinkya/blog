import React from "react";
import Header from "../Components/Header";
import BlogListPageContent from "../Components/BlogListPageComponents/BlogListPageContent";
import Footer from "../Components/Footer";

const BlogListPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <BlogListPageContent />
      <Footer />
    </div>
  );
};

export default BlogListPage;
