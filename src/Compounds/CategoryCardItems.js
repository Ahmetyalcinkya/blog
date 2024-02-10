import { t } from "i18next";
import React from "react";
import CategoryHeaderCompound from "./CategoryHeaderCompound";

const CategoryCardItems = ({ categories, setCategoryProducts }) => {
  const highRatingCategories = [...categories].sort(
    (a, b) => b.rating - a.rating
  );

  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-4xl mt-6 mb-2 text-purple dark:text-pinkish">
        {t("Categories")}
      </h4>
      <div className="flex gap-x-2 mb-8">
        {highRatingCategories?.map((category) => (
          <CategoryHeaderCompound key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardItems;
