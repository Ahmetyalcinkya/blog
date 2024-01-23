import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = ({ goToGitHub, goToLinkedIn, goToInstagram }) => {
  return (
    <div className="w-full row-around h-16 mt-4 bg-purple/20 dark:bg-pinkish/20 transition-colors p-4 text-purple dark:text-white">
      <h4 className="text-base font-bold text-purple dark:text-pinkish">
        Copyright © 2023 by Ahmet Can Yalçınkaya
      </h4>
      <div className="flex items-center text-2xl font-bold text-purple dark:text-pinkish">
        LOGO
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
  );
};

export default Footer;
