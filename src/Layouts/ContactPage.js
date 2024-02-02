import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactPageContent from "../Components/ContactPageComponents/ContactPageContent";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactPageContent />
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
