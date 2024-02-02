import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

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
          toast.success("Post Saved!");
          history.push("/blogs");
        })
        .catch((err) => {
          toast.success("Please Login!");
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
        New Blog
      </h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="comp-max-width py-10 px-8 flex flex-col justify-center items-center"
      >
        <div className="w-[35rem] h-24 text-left">
          <label className="form-label">
            Blog title :
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
        {[0, 1, 2].map((index) => (
          <div key={index} className="w-[35rem] h-24 text-left">
            <label className="form-label">
              {`Image ${index + 1}:`}
              <input
                className="form-input"
                placeholder="Blog resmini giriniz..."
                defaultValue={null}
                {...register(`images[${index}]`, {
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Geçerli bir URL giriniz.",
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
          Kategori :
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
            Blog content :
            <textarea
              className="form-input"
              type="text"
              placeholder="Blog içeriğini buraya yazmalısınız..."
              {...register("content", {
                required: "Content alanı doldurulmak zorundadır.",
                minLength: {
                  value: 500,
                  message: "Content 500 harften kısa olamaz.",
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
          {loader === true ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NewBlogPageContent;
