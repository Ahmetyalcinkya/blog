import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosWAuth } from "../Utilities/AxiosWAuth";
import { Spinner } from "@material-tailwind/react";
import { t } from "i18next";
import { toast } from "react-toastify";

const CategorySaveForm = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      image: "",
      rating: "",
    },
    mode: "all",
  });

  const onSubmit = (updateRequest) => {
    setLoader(true);
    setTimeout(() => {
      AxiosWAuth()
        .post("/categories/admin/saveCategory", updateRequest)
        .then((res) => toast.success(t("CategorySaveToast")))
        .catch((err) => toast.error(t("CategorySaveToastFail")));
      setLoader(false);
    }, 2000);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-x-6 items-center justify-center gap-y-2.5 bg-purple/30 dark:bg-pinkish/30 border border-purple dark:border-pinkish rounded-xl py-4 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow"
    >
      <div className="w-[35rem] h-24 text-left">
        <label className="form-label">
          {t("CategoryTitle")} :
          <input
            className="form-input"
            placeholder={t("CategoryPlaceHolder")}
            {...register("title", {
              required: t("BlogTitleRequired"),
            })}
          />
          {errors.title && (
            <span className="form-span">* {errors.title.message}</span>
          )}
        </label>
      </div>
      <div className="w-[35rem] h-24 text-left">
        <label className="form-label">
          {t("CategoryImage")} :
          <input
            className="form-input"
            placeholder={t("CategoryImagePlaceHolder")}
            defaultValue={null}
            {...register("image", {
              required: t("URLRequired"),
              minLength: {
                value: 10,
                message: t("URLLengthNotValid"),
              },
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: t("URLNotValid"),
              },
            })}
          />
          {errors.image && (
            <span className="form-span">* {errors.image.message}</span>
          )}
        </label>
      </div>
      <h4 className="font-bold">{t("DBRatingSet")}</h4>
      <input type="hidden" {...register("rating")} defaultValue="0" />
      <button
        className="w-1/10 text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300 h-12"
        disabled={loader}
      >
        {loader ? <Spinner /> : <h4>{t("SaveCategory")}</h4>}
      </button>
    </form>
  );
};

export default CategorySaveForm;
