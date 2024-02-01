import React from "react";
import Pic1 from "../../Assets/About1.png";
import Pic2 from "../../Assets/About2.jpg";
import Pic3 from "../../Assets/About3.jpg";
import { t } from "i18next";

const AboutPageContent = () => {
  return (
    <div className="w-full flex flex-col justify-around items-center min-h-screen">
      <div className="comp-max-width flex flex-col  gap-y-20 py-10">
        <div className="flex gap-x-4 justify-center items-center">
          <img
            src={Pic1}
            alt="about1"
            className="w-96 h-96 rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow object-cover"
          />
          <div className="flex flex-col gap-y-4 p-4 text-purple dark:text-pinkish">
            <h4 className="font-bold text-3xl">{t("Welcome")}</h4>
            <p className="font medium">{t("About1")}</p>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center items-center">
          <div className="flex flex-col gap-y-4 p-4 text-purple dark:text-pinkish">
            <h4 className="font-bold text-3xl">{t("Why")}</h4>
            <p className="font medium">{t("About2")}</p>
          </div>
          <img
            src={Pic2}
            alt="about2"
            className="w-96 h-96 rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow object-cover"
          />
        </div>
        <div className="flex gap-x-4 justify-center items-center">
          <img
            src={Pic3}
            alt="about2"
            className="w-96 h-96 rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow object-cover"
          />
          <div className="flex flex-col gap-y-4 p-4 text-purple dark:text-pinkish">
            <h4 className="font-bold text-3xl">{t("WhatYouFind")}</h4>
            <p className="font medium">{t("About3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
