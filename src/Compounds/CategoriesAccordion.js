import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { t } from "i18next";
import React from "react";

const CategoriesAccordion = ({ category, deleteHandler }) => {
  return (
    <Accordion className="w-[16rem]">
      <AccordionSummary
        id="panel-header"
        aria-controls="panel-content"
        className="h-16 border border-purple dark:border-pinkish"
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
        <h4>
          {t("Rating")} : {category?.rating}
        </h4>
        <button
          onClick={() => deleteHandler(category?.id)}
          className="bg-red/30 border border-red shadow-redCustomBoxShadow  px-2 py-1 rounded-xl"
        >
          {t("Delete")}
        </button>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoriesAccordion;
