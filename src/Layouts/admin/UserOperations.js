import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import UserOperationsContent from "../../Components/admin/UserOperationsContent";

const UserOperations = () => {
  return (
    <div>
      <Header />
      <UserOperationsContent />
      <Footer />
    </div>
  );
};

export default UserOperations;
