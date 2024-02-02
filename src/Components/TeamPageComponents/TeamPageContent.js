import React from "react";
import ProfilePic from "../../Assets/Profil.png";
import { t } from "i18next";

const TeamPageContent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex flex-col justify-center items-center py-8 gap-y-4">
        <img
          src={ProfilePic}
          alt="profile-picture"
          className="w-80 h-80 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow rounded-full"
        />
        <div className="flex flex-col justify-center items-center gap-y-1 text-purple dark:text-pinkish ">
          <h4 className="text-4xl font-medium">Ahmet Can Yalçınkaya</h4>
          <h4 className="italic">Full Stack Developer</h4>
        </div>
        <div className="flex flex-col justify-center items-center w-[35rem] gap-y-2 text-purple dark:text-pinkish font-medium">
          <p>{t("AboutMe1")}</p>
          <p>{t("AboutMe2")}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPageContent;
