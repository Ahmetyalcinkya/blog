import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import UserOperationsContent from "../../Components/admin/UserOperationsContent";

const UserOperations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <UserOperationsContent />
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UserOperations;
