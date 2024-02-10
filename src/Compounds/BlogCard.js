import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.categoryTitle.toLowerCase()}/${post.id}`}
      className="flex flex-col border w-full gap-y-1 px-4 py-2 border-purple dark:border-pinkish rounded-xl bg-purple/30 dark:bg-pinkish/30 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow text-black dark:text-white"
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-x-6 items-center justify-center">
          <img
            src={post.categoryImage}
            alt={post.id}
            className="w-10 h-10 rounded-full"
          />
          <h4 className="text-lg font-bold text-purple dark:text-pinkish">
            {post.categoryTitle}
          </h4>
        </div>
        <h4 className="text-lg font-bold text-purple dark:text-pinkish flex items-baseline gap-x-2">
          <span className="text-sm font-medium">{t("CategoryRating")}:</span>{" "}
          {post.categoryRating}
        </h4>
      </div>
      <hr />
      <div className="flex flex-col w-full py-2 gap-y-2">
        <div className="flex justify-between">
          <h4 className="text-base font-bold text-purple dark:text-pinkish line-clamp-1">
            {post.title}
          </h4>
          <h4 className="text-lg font-bold text-purple dark:text-pinkish flex items-baseline gap-x-2">
            <span className="text-sm font-medium">{t("PostRating")}:</span>
            {post.rating}
          </h4>
        </div>
        <p className="line-clamp-6">{post.content}</p>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex gap-x-6 items-center">
          <img
            src={post.userPicture}
            alt={post.id}
            className="w-10 h-10 rounded-full"
          />
          <h4>
            {post.userName} {post.userSurname}
          </h4>
        </div>

        <h4 className="text-lg font-bold text-purple dark:text-pinkish flex items-baseline gap-x-2">
          <span className="text-sm font-medium">{t("CreatedDate")}:</span>{" "}
          {post.createdAt.slice(0, 10)}
        </h4>
      </div>
    </Link>
  );
};

export default BlogCard;
