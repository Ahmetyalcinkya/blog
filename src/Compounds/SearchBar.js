import { t } from "i18next";
import React from "react";

const SearchBar = ({ changeHandler }) => {
  return (
    <div className="relative font-bold flex-1">
      <input
        className="bg-purple/30 dark:bg-pinkish/30 border border-purple dark:border-pinkish text-black dark:text-white text-sm rounded-lg w-full p-2.5 box-border outline-none placeholder:text-purple dark:placeholder:text-pinkish h-10"
        onChange={changeHandler}
        placeholder={t("SearchPosts")}
      />
    </div>
  );
};

export default SearchBar;
