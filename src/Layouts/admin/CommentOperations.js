import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CommentOperationsContent from "../../Components/admin/CommentOperationsContent";

const CommentOperations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CommentOperationsContent />
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CommentOperations;
