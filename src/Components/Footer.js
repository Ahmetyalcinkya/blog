import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LOGO from "../Assets/Blog.io.png";

const Footer = ({ goToGitHub, goToLinkedIn, goToInstagram }) => {
  return (
    <div className="w-full row-around h-30 mt-4 bg-purple/20 dark:bg-pinkish/20 transition-colors p-4 text-purple dark:text-white">
      <div className="w-full flex justify-between items-center">
        <h4 className=" flex flex-col justify-center items-center text-base font-bold text-purple dark:text-pinkish">
          <h4>Copyright © 2024 by</h4>
          <h4>Ahmet Can Yalçınkaya</h4>
        </h4>
        <div className="flex -ml-20 items-center text-2xl font-bold text-purple dark:text-pinkish">
          <img src={LOGO} alt="" className="w-20 h-20 rounded-full" />
        </div>
        <div className="flex gap-x-3 text-darkLila dark:text-pinkish">
          <button onClick={goToLinkedIn}>
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </button>
          <button onClick={goToGitHub}>
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </button>
          <button onClick={goToInstagram}>
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
