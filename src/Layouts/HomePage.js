import React from "react";
import Header from "../Components/Header";
import PageContent from "../Components/HomePageComponents/PageContent";
import Footer from "../Components/Footer";

const HomePage = () => {
  const goToGitHub = () => {
    const gitHub = "https://github.com/Ahmetyalcinkya";

    window.open(gitHub, "_blank");
  };
  const goToLinkedIn = () => {
    const linkedIn = "https://www.linkedin.com/in/ahmet-can-yalcinkaya/";

    window.open(linkedIn, "_blank");
  };
  const goToInstagram = () => {
    const instagram = "https://www.instagram.com/ahmet.yalcinkayaa/";

    window.open(instagram, "_blank");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header
        goToGitHub={goToGitHub}
        goToLinkedIn={goToLinkedIn}
        goToInstagram={goToInstagram}
      />
      <PageContent />
      <Footer
        goToGitHub={goToGitHub}
        goToLinkedIn={goToLinkedIn}
        goToInstagram={goToInstagram}
      />
    </div>
  );
};

export default HomePage;
