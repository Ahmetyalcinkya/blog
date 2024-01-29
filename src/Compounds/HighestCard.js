import React from "react";
import { Link } from "react-router-dom";

const HighestCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="flex flex-col w-full px-4 py-1.5 gap-y-1 text-black dark:text-white hover:bg-darkLila hover:text-white hover:dark:bg-lila rounded-lg transition-colors duration-500"
    >
      <div className="flex gap-x-4 items-center justify-between">
        <img
          src={post.categoryImage}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <h4 className="line-clamp-1">{post.title.slice(0, 50)}</h4>
        <h4>{post.rating}</h4>
      </div>
      <h4 className="line-clamp-1">{post.content}</h4>
    </Link>
  );
};

export default HighestCard;
