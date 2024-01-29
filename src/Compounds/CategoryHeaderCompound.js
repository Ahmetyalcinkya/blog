import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryHeaderCompound = ({ category }) => {
  const { search } = useLocation();
  return (
    <Link
      to={`/blogs/${category.title.toLowerCase()}${search}`}
      key={category.id}
      className="flex justify-center items-center gap-x-2 border py-1 px-2 rounded-full border-purple dark:border-pinkish shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow text-purple dark:text-white bg-purple/20 dark:bg-pinkish/20"
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
