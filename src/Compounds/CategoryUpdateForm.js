import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CategoryUpdateForm = ({ categories }) => {
  const [loader, setLoader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      title: "",
      image: "",
      rating: "",
    },
    mode: "all",
  });

  const changeCategory = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };
  const ratingOfCategory = categories?.find(
    (category) => category.id == selectedCategory
  );
  const onSubmit = (updateRequest) => {
    setLoader(true);
    setTimeout(() => {
      AxiosWAuth()
        .put("/categories/admin/updateCategory", updateRequest)
        .then((res) => toast.success("Category updated!"))
        .catch((err) => toast.error("Category not updated!"));
      setLoader(false);
    }, 2000);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-x-6 items-center justify-center gap-y-2.5 bg-purple/30 dark:bg-pinkish/30 border border-purple dark:border-pinkish rounded-xl py-4 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow"
    >
      <div className="w-[35rem] flex justify-center items-center">
        <label className="form-label">
          Kategori :
          <select
            className="border border-purple dark:border-pinkish py-2 px-4 rounded-lg mx-4 text-purple dark:text-lila"
            {...register("id")}
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
      </div>
      <div className="w-[35rem] h-24 text-left">
        <label className="form-label">
          New Category title :
          <input
            className="form-input"
            placeholder="Blog başlığını giriniz..."
            {...register("title", {
              required: "Title alanı doldurulmak zorundadır.",
              minLength: {
                value: 10,
                message: "Title 10 harften kısa olamaz.",
              },
            })}
          />
          {errors.title && (
            <span className="form-span">* {errors.title.message}</span>
          )}
        </label>
      </div>
      <div className="w-[35rem] h-24 text-left">
        <label className="form-label">
          New Category image :
          <input
            className="form-input"
            placeholder="Blog resmini giriniz..."
            defaultValue={null}
            {...register("image", {
              required: "URL alanı doldurulmak zorundadır.",
              minLength: {
                value: 10,
                message: "URL 10 harften kısa olamaz.",
              },
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Geçerli bir URL giriniz.",
              },
            })}
          />
          {errors.image && (
            <span className="form-span">* {errors.image.message}</span>
          )}
        </label>
      </div>
      <input
        type="hidden"
        {...register("rating")}
        defaultValue={ratingOfCategory?.rating}
      />
      <button
        className="w-1/10 text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300 h-12"
        disabled={loader}
      >
        {loader ? <Spinner /> : "Kategoriyi Güncelle"}
      </button>
    </form>
  );
};

export default CategoryUpdateForm;
