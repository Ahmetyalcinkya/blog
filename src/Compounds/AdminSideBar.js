import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const authenticatedUser = useSelector((state) => state.user.user);

  return (
    <div className="w-1/3 flex flex-col justify-center items-center border border-purple dark:border-pinkish bg-purple/30 dark:bg-pinkish/30 rounded-xl px-4 py-2 text-black dark:text-white">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-x-3">
          <img
            src={authenticatedUser?.profilePicture}
            alt={authenticatedUser?.id}
            className="w-10 h-10 rounded-full"
          />
          <h4 className="font-bold">
            {authenticatedUser?.name} {authenticatedUser?.surname}
          </h4>
        </div>
        <h4 className="underline font-bold">{t("Admin")}</h4>
      </div>
      <hr className="text-purple dark:text-pinkish w-full my-2" />
      <div className="flex flex-col w-full gap-y-2">
        <Link
          to={"/admin/category-operations"}
          className="w-full font-bold flex justify-between"
        >
          {t("CategoryOperations")}{" "}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </Link>
        <Link
          to={"/admin/comment-operations"}
          className="w-full font-bold flex justify-between"
        >
          {t("CommentOperations")}{" "}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </Link>
        <Link
          to={"/admin/post-operations"}
          className="w-full font-bold flex justify-between"
        >
          {t("PostOperations")}{" "}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </Link>
        <Link
          to={"/admin/user-operations"}
          className="w-full font-bold flex justify-between"
        >
          {t("UserOperations")}{" "}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </Link>
        <Link
          to={"/admin/home"}
          className="w-full font-bold flex justify-between"
        >
          {t("AdminHomePage")}{" "}
          <span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
