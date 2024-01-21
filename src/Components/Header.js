import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import { t } from "i18next";
import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full row-centered sticky top-0 left-0 right-0 bg-transparent transition-colors p-4 z-50">
      <NavLink
        to="/"
        className="flex items-center text-2xl font-bold text-purple"
      >
        Logo
      </NavLink>
      <nav className="w-[60rem] row-around py-4 px-0 text-purple">
        <NavLink to="/" className="navlink">
          {t("Home")}
        </NavLink>
        <NavLink to="/blog" className="navlink">
          Blog
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/about" className="navlink">
          Team
        </NavLink>
        <NavLink to="/about" className="navlink">
          Contact Us
        </NavLink>
      </nav>
      <Popover className="relative">
        <Popover.Button className="row-centered gap-4 shadow-lightCustomBoxShadow bg-purple rounded-full px-4 py-2 text-white outline-none">
          <div className="w-8 h-8 rounded-full bg-purple flex justify-center items-center">
            img
          </div>
          {/* <img src="" alt="" className="user-image" />{" "} */}
          {/* User Profile Picture in here and will be replace img div if user logged in */}
          UserName
          <span className="cursor-pointer hidden">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute top-14 z-10 w-40 flex flex-col">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative flex flex-col gap-2 text-cream p-2 w-full bg-purple text-white">
                <Link
                  to="/login"
                  className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila"
                >
                  Signup
                </Link>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Header;
