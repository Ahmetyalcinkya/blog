import React, { Fragment, useContext, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SwitchContext } from "../Contexts/SwitchContext";
import { LangContext } from "../Contexts/LanguageContext";
import CustomizedSwitches from "../Compounds/SwitchCompound";
import { Popover, Transition } from "@headlessui/react";
import { t } from "i18next";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../Assets/Blog.io.png";
import { useSelector } from "react-redux";
import { fetchStates } from "../Redux/features/global/globalSlice";

const Header = () => {
  const { theme } = useContext(SwitchContext);
  const { toggleLanguage } = useContext(LangContext);
  const { user } = useSelector((state) => state.user);

  const userNotFetched = useSelector(
    (state) => state.user.fetchStates === fetchStates.not_fetched
  );
  const userFetched = useSelector(
    (state) => state.user.fetchStates === fetchStates.fetched
  );

  useEffect(() => {
    if (theme === "light") {
    } else {
      //TOASTIFY
    }
  }, []);

  return (
    <header className="w-full row-centered sticky top-0 left-0 right-0 bg-purple/20 dark:bg-pinkish/20 transition-colors p-4 h-32 z-50">
      <NavLink
        to="/"
        className="flex items-center text-2xl font-bold text-purple dark:text-pinkish"
      >
        <img src={LOGO} alt="" className="w-20 h-20 rounded-full" />
      </NavLink>
      <nav className="w-[75rem] row-around py-4 px-0 text-purple dark:text-pinkish">
        <NavLink to="/" className="navlink">
          {t("Home")}
        </NavLink>
        <NavLink to="/blogs" className="navlink">
          Blog
        </NavLink>
        <NavLink to="/about" className="navlink">
          {t("About")}
        </NavLink>
        <NavLink to="/team" className="navlink">
          {t("Team")}
        </NavLink>
        <NavLink to="/contact" className="navlink">
          {t("Contact")}
        </NavLink>
        <div className="w-24 gap-x-2 flex justify-center">
          <button
            onClick={() => toggleLanguage("tr")}
            className="border rounded-full px-2 py-1 bg-purple dark:bg-pinkish dark:text-pinkish hover:bg-darkLila hover:dark:bg-lila transition-colors duration-300"
          >
            <span className="text-white dark:text-black">TR</span>
          </button>
          <button
            onClick={() => toggleLanguage("en")}
            className="border rounded-full px-2 py-1 bg-purple dark:bg-pinkish dark:text-pinkish hover:bg-darkLila hover:dark:bg-lila transition-colors duration-300"
          >
            <span className="text-white dark:text-black">EN</span>
          </button>
        </div>
        <CustomizedSwitches checked={theme} />
      </nav>
      <Popover className="relative">
        <Popover.Button className="row-centered gap-4 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow bg-purple dark:bg-pinkish rounded-full px-4 py-2 text-white dark:text-black outline-none">
          {userNotFetched && <h4>{t("Enter")}</h4>}
          {userFetched && (
            <div className="flex gap-x-2 items-center justify-center">
              <img
                src={user?.profilePicture}
                alt={user?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <h4 className="line-clamp-1">
                {/* LINE CLAMP MUST BE SET */}
                {user?.name} {user?.surname}
              </h4>
            </div>
          )}
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
              {userNotFetched && (
                <div className="relative flex flex-col gap-2 text-cream p-2 w-full bg-purple dark:bg-pinkish text-white dark:text-black">
                  <Link
                    to="/login"
                    className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila"
                  >
                    {t("Login")}
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila"
                  >
                    {t("Signup")}
                  </Link>
                </div>
              )}
              {userFetched && user?.role.toUpperCase() === "USER" && (
                <div className="relative flex flex-col gap-2 text-cream p-2 w-full bg-purple dark:bg-pinkish text-white dark:text-black">
                  <Link
                    to={`/user/${user?.id}`}
                    className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila"
                  >
                    {t("UserProfile")}
                  </Link>
                  <button className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila">
                    {t("Logout")}
                  </button>
                </div>
              )}
              {userFetched && user?.role.toUpperCase() === "ADMIN" && (
                <div className="relative flex flex-col gap-2 text-cream p-2 w-full bg-purple dark:bg-pinkish text-white dark:text-black">
                  <Link
                    to={`/user/${user?.id}`}
                    className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila"
                  >
                    {t("UserProfile")}
                  </Link>
                  <Link
                    to="/admin/home"
                    className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila"
                  >
                    {t("AdminControl")}
                  </Link>
                  <button className="w-full text-burgundy flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-darkLila hover:dark:bg-lila">
                    {t("Logout")}
                  </button>
                </div>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Header;
