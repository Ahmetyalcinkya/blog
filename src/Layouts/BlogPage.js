import React from "react";
import { useParams } from "react-router-dom";
import BlogPagePageContent from "../Components/BlogPageComponents/BlogPagePageContent";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const BlogPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <BlogPagePageContent id={id} />
      <Footer />
    </div>
  );
};

export default BlogPage;
