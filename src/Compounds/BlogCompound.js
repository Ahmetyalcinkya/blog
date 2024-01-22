import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const BlogCompound = ({ post }) => {
  return (
    <div className="w-[25rem] border rounded-2xl text-black dark:text-white bg-purple/15 dark:bg-pinkish/15 border-purple shadow-lightCustomBoxShadow dark:border-pinkish dark:shadow-darkCustomBoxShadow">
      <div className="flex flex-col p-6 gap-y-2">
        <div className="flex justify-around gap-x-2 px-4 items-center">
          <img
            src={post.categoryImage}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <h4 className="line-clamp-1">{post.title}</h4>
          <h4>{post.rating}</h4>
        </div>
        <hr />
        <div>
          <p className="line-clamp-6">{post.content}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <img
            src={post.userPicture}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <h6>
            {post.userName} {post.userSurname}
          </h6>
          <h6>{post.createdAt.slice(0, 10)}</h6>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-t p-2 hover:dark:bg-lila/30 hover:bg-darkLila/30 rounded-b-2xl transition-colors duration-300">
        <Link to={`/blog/${post.id}`} className="w-full text-center">
          {t("GoToBlog")}
        </Link>
      </div>
    </div>
  );
};

export default BlogCompound;
