import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryHeaderCompound = ({ category }) => {
  const { search } = useLocation();
  return (
    <div className="flex justify-center items-center gap-x-2 border py-1 px-2 rounded-full border-purple dark:border-pinkish shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow text-purple dark:text-white bg-purple/20 dark:bg-pinkish/20">
      <Link
        to={`/blogs/${category.title.toLowerCase()}${search}`}
        key={category.id}
        className="flex items-center gap-x-2"
      >
        <img
          src={category.image}
          alt={category.id}
          className="w-10 h-10 rounded-full object-cover flex-1"
        />
        <h4 className="flex-1">{category.title}</h4>
      </Link>
    </div>
  );
};

export default CategoryHeaderCompound;
