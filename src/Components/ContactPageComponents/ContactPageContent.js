import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faLocationDot,
  faMobileScreen,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactPageContent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex flex-col justify-center items-center gap-y-20 py-28">
        <div className="flex flex-col gap-y-6 py-4 justify-center items-center">
          <h4 className="italic font-medium text-purple dark:text-pinkish text-3xl">
            Get in touch with us !
          </h4>
          <div className=" flex gap-x-24 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <span className="w-20 h-20 text-purple dark:text-pinkish">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="w-full h-full"
                />
              </span>
              <h4 className="text-purple dark:text-pinkish w-36 text-center">
                +90 (000) 000 00 00
                <h4 className="text-purple dark:text-pinkish w-36 text-center">
                  +90 (111) 111 11 11
                </h4>
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <span className="w-20 h-20 text-purple dark:text-pinkish">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-full h-full"
                />
              </span>
              <h4 className="text-purple dark:text-pinkish w-36 text-center">
                221B Baker Street
                <h4 className="text-purple dark:text-pinkish w-36 text-center">
                  London, UK
                </h4>
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-36">
              <span className="w-20 h-20 text-purple dark:text-pinkish">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="w-full h-full"
                />
              </span>
              <h4 className="text-purple dark:text-pinkish text-center">
                ahmetcan.yalcinkaya55@gmail.com
                <h4 className="text-purple dark:text-pinkish text-center">
                  Blog.io@blog.com
                </h4>
              </h4>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-y-6">
          <h4 className="italic font-medium text-purple dark:text-pinkish text-3xl">
            Connect with us !
          </h4>
          <div className="flex gap-x-8 justify-center items-center">
            <a
              href="https://www.instagram.com/ahmet.yalcinkayaa/"
              target="_blank"
              className="w-10 h-10 text-purple dark:text-pinkish"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-full h-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmet-can-yalcinkaya/"
              target="_blank"
              className="w-10 h-10 text-purple dark:text-pinkish"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-full h-full" />
            </a>
            <a
              href="https://github.com/Ahmetyalcinkya"
              target="_blank"
              className="w-10 h-10 text-purple dark:text-pinkish"
            >
              <FontAwesomeIcon icon={faGithub} className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContent;
