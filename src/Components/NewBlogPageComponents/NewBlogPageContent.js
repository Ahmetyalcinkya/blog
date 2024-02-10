import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { t } from "i18next";

const NewBlogPageContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      images: [],
      categoryID: "",
    },
    mode: "all",
  });
  const history = useHistory();

  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loader, setLoader] = useState(false);

  const changeCategory = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const onSubmit = (postData) => {
    setLoader(true);
    setTimeout(() => {
      AxiosWAuth()
        .post("posts/", postData)
        .then((res) => {
          toast.success(t("PostSaveToast"));
          history.push("/blogs");
        })
        .catch((err) => {
          toast.success(t("LoginToast"));
          history.push("/login");
          console.log(err);
        });
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    AxiosWAuth()
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <h4 className="font-bold text-3xl text-purple dark:text-pinkish">
        {t("NewBlog")}
      </h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="comp-max-width py-10 px-8 flex flex-col justify-center items-center"
      >
        <div className="w-[35rem] h-24 text-left">
          <label className="form-label">
            {t("BlogTitle")} :
            <input
              className="form-input"
              placeholder={t("BlogPlaceHolder")}
              {...register("title", {
                required: t("BlogTitleRequired"),
                minLength: {
                  value: 10,
                  message: t("TitleNotValid"),
                },
              })}
            />
            {errors.title && (
              <span className="form-span">* {errors.title.message}</span>
            )}
          </label>
        </div>
        {[0, 1, 2].map((index) => (
          <div key={index} className="w-[35rem] h-24 text-left">
            <label className="form-label">
              {`${t("Image")} ${index + 1}:`}
              <input
                className="form-input"
                placeholder={t("ImagePlaceHolder")}
                defaultValue={null}
                {...register(`images[${index}]`, {
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: t("URLNotValid"),
                  },
                })}
              />
              {errors.images && (
                <span className="form-span">* {errors.images.message}</span>
              )}
            </label>
          </div>
        ))}
        <label className="form-label">
          {t("Category")} :
          <select
            className="border border-purple dark:border-pinkish py-2 px-4 rounded-lg mx-4 text-purple dark:text-lila"
            {...register("categoryID")}
            onChange={changeCategory}
          >
            {categories !== null &&
              categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
          </select>
        </label>
        <div className="flex flex-col w-[35rem] py-4">
          <label className="form-label">
            {t("BlogContent")} :
            <textarea
              className="form-input"
              type="text"
              placeholder={t("BlogContentPlaceHolder")}
              {...register("content", {
                required: t("ContentRequired"),
                minLength: {
                  value: 500,
                  message: t("ContentMaxNotValid"),
                },
              })}
            />
            {errors.content && (
              <span className="form-span">* {errors.content.message}</span>
            )}
          </label>
        </div>
        <button
          className="text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300"
          disabled={loader}
        >
          {loader === true ? <Spinner /> : <h4>{t("Submit")}</h4>}
        </button>
      </form>
    </div>
  );
};

export default NewBlogPageContent;
