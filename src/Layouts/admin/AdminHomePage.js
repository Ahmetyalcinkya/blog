import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AdminHomePageContent from "../../Components/admin/AdminHomePageContent";

const AdminHomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AdminHomePageContent />
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AdminHomePage;
