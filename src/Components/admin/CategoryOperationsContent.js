import { t } from "i18next";
import React, { useEffect, useState } from "react";
import AdminSideBar from "../../Compounds/AdminSideBar";
import CategoriesAccordion from "../../Compounds/CategoriesAccordion";
import CategorySaveForm from "../../Compounds/CategorySaveForm";
import CategoryUpdateForm from "../../Compounds/CategoryUpdateForm";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";

const CategoryOperationsContent = () => {
  const [categories, setCategories] = useState(null);

  const deleteHandler = (id) => {
    AxiosWAuth().delete(`categories/admin/deleteCategory/${id}`);
  };

  useEffect(() => {
    AxiosWAuth()
      .get("/categories")
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex items-start justify-center py-20">
        <AdminSideBar />
        <div className="w-2/3 flex flex-col items-center justify-center text-purple dark:text-pinkish gap-y-1.5 px-8">
          <h4 className="text-xl font-bold">{t("Categories")}</h4>
          <h4 className="mb-2 font-bold">{t("DeleteCategory")}</h4>
          <div className="w-full flex justify-center items-center bg-purple/30 dark:bg-pinkish/30 border border-purple dark:border-pinkish rounded-xl py-4 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow">
            <div className="w-[35rem] flex flex-wrap gap-x-6 items-center justify-center gap-y-2.5">
              {categories !== null &&
                categories?.map((category) => (
                  <CategoriesAccordion
                    category={category}
                    deleteHandler={deleteHandler}
                  />
                ))}
            </div>
          </div>
          <h4 className="text-xl font-bold py-4">{t("UpdateCategory")}</h4>
          <CategoryUpdateForm categories={categories} />
          <h4 className="text-xl font-bold py-4">{t("AddNewCategory")}</h4>
          <CategorySaveForm />
        </div>
      </div>
    </div>
  );
};

export default CategoryOperationsContent;
