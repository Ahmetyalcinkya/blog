import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserProfilePageContent from "../Components/UserProfilePageComponents/UserProfilePageContent";

const UserProfilePage = () => {
  return (
    <div>
      <Header />
      <UserProfilePageContent />
      <Footer />
    </div>
  );
};

export default UserProfilePage;
