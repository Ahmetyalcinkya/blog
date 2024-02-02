import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TeamPageContent from "../Components/TeamPageComponents/TeamPageContent";

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TeamPageContent />
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;
