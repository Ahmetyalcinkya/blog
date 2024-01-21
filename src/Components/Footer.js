import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="comp-max-width row-around">
      <h4>Copyright © 2023 by Ahmet Can Yalçınkaya</h4>
      <div>LOGO</div>
      <div>
        <span className="px-2">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </span>
        <span className="px-2">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </span>
        <span className="px-2">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
