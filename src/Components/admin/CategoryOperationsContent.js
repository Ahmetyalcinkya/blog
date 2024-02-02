import React, { useEffect, useState } from "react";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import AdminSideBar from "../../Compounds/AdminSideBar";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const CategoryOperationsContent = () => {
  const [categories, setCategories] = useState(null);
  console.log(categories);

  const deleteHandler = (id) => {
    AxiosWAuth().delete(`categories//admin/deleteCategory/${id}`);
  };

  useEffect(() => {
    AxiosWAuth()
      .get("/categories")
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex items-center justify-center py-20">
        <AdminSideBar />
        <div className="w-2/3 flex flex-col items-center justify-center text-purple dark:text-pinkish gap-y-1.5">
          <h4>All Categories</h4>
          <h4>
            You can delete the category in accordion. If you delete one of these
            categories, there is no going back.
          </h4>
          <div className="w-full flex flex-wrap gap-x-6 items-center justify-center gap-y-2.5">
            {categories !== null &&
              categories?.map((category) => (
                <Accordion className="w-72">
                  <AccordionSummary
                    id="panel-header"
                    aria-controls="panel-content"
                    className="h-16"
                  >
                    <div className="flex justify-between items-center w-full">
                      <img
                        src={category?.image}
                        alt={category?.id}
                        className="w-10 h-10 rounded-full"
                      />
                      <h4>{category?.title}</h4>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="h-16 flex w-full items-center justify-between">
                    <h4>Rating : {category?.rating}</h4>
                    <button
                      onClick={() => deleteHandler(category?.id)}
                      className="bg-purple/30 dark:bg-pinkish/30 border border-purple dark:border-pinkish shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow px-2 py-1 rounded-xl"
                    >
                      Delete
                    </button>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryOperationsContent;
