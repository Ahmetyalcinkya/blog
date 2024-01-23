import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryHeaderCompound = ({ category }) => {
  return (
    <Link
      to={`/blog/${category.title.toLowerCase()}/posts?category=${category.id}`}
      key={category.id}
      className="flex justify-center items-center gap-x-2 border p-1 rounded-full border-purple dark:border-pinkish shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow text-purple dark:text-white bg-purple/20 dark:bg-pinkish/20"
    >
      <img
        src={category.image}
        alt={category.id}
        className="w-10 h-10 rounded-full object-cover"
      />
      <h4>{category.title}</h4>
    </Link>
  );
};

export default CategoryHeaderCompound;
