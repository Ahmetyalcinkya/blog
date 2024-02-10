import React, { useEffect, useState } from "react";
import AdminSideBar from "../../Compounds/AdminSideBar";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { t } from "i18next";

const PostOperationsContent = () => {
  const [allPosts, setAllPosts] = useState(null);
  const [postsByTitle, setPostsByTitle] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "all",
  });

  const onSubmit = (data) => {
    AxiosWAuth()
      .get(`posts/title?filter=${data.title}`)
      .then((res) => setPostsByTitle(res.data))
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {
    AxiosWAuth()
      .delete(`posts/deletePostById/${id}`)
      .then((res) => toast.success(t("PostToast")))
      .catch((err) => toast.error(t("PostToastFail")));
  };
  console.log(allPosts);
  useEffect(() => {
    AxiosWAuth()
      .get("posts/")
      .then((res) => setAllPosts(res.data))
      .catch((err) =>
        toast.error("There is an error while posts were fetched!")
      );
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex items-start justify-center py-20">
        <AdminSideBar />
        <div className="w-2/3 flex flex-col items-center justify-center text-purple dark:text-pinkish gap-y-1.5 px-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex justify-start items-center gap-x-4"
          >
            <div className="form-div">
              <label className="form-label">
                {t("SearchPosts")} :
                <input
                  className="form-input"
                  placeholder={t("BlogPlaceHolder")}
                  {...register("title", {
                    required: t("BlogTitleRequired"),
                  })}
                />
                {errors.title && (
                  <span className="form-span">* {errors.title.message}</span>
                )}
              </label>
            </div>
            <button className="w-1/10 text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3.5 transition-colors duration-300">
              {t("Search")}
            </button>
          </form>
          {postsByTitle?.length > 0 ? (
            postsByTitle?.map((post) => (
              <div className="flex flex-col items-center border border-purple dark:border-pinkish bg-purple/30 dark:bg-pinkish/30 w-full rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow my-6">
                <Link
                  to={`/blog/${post.categoryTitle.toLowerCase()}/${post.id}`}
                  key={post.id}
                  className="flex flex-col justify-start py-1 px-4 w-full"
                >
                  <h4 className="flex gap-x-2 items-center py-1">
                    <img
                      src={post.categoryImage}
                      alt={post.id}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{post.categoryTitle}</span>
                  </h4>
                  <hr className="w-full py-1" />
                  <p>{post.content}</p>
                  <h4>{post.createdAt.slice(0, 10)}</h4>
                  <div className="flex w-full items-center justify-start gap-x-2 py-2">
                    <img
                      src={post.userPicture}
                      alt={post.userID}
                      className="w-10 h-10 rounded-full"
                    />
                    <h4>
                      {post.userName} {post.userSurname}
                    </h4>
                  </div>
                </Link>
                <button
                  onClick={() => deleteHandler(post.id)}
                  className="border-t border-purple dark:border-pinkish hover:bg-red/50 hover:text-white w-full rounded-b-xl transition-colors duration-500"
                >
                  {t("DeletePost")}
                </button>
              </div>
            ))
          ) : (
            <h4 className="font-bold text-lg italic">{t("SearchPostWarn")}</h4>
          )}
          <hr className="w-full my-2" />
          <div className="flex w-full flex-col justify-center items-center">
            <h4 className="font-bold text-3xl">{t("Posts")}</h4>
            {allPosts != null &&
              allPosts?.map((post) => (
                <div className="flex flex-col items-center border border-purple dark:border-pinkish bg-purple/30 dark:bg-pinkish/30 w-full rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow my-6">
                  <Link
                    to={`/blog/${post.categoryTitle.toLowerCase()}/${post.id}`}
                    key={post.id}
                    className="flex flex-col justify-start py-1 px-4 w-full"
                  >
                    <h4 className="flex gap-x-2 items-center py-1">
                      <img
                        src={post.categoryImage}
                        alt={post.id}
                        className="w-10 h-10 rounded-full"
                      />
                      <span>{post.categoryTitle}</span>
                    </h4>
                    <hr className="w-full py-1" />
                    <p>{post.content}</p>
                    <h4>{post.createdAt.slice(0, 10)}</h4>
                    <div className="flex w-full items-center justify-start gap-x-2 py-2">
                      <img
                        src={post.userPicture}
                        alt={post.userID}
                        className="w-10 h-10 rounded-full"
                      />
                      <h4>
                        {post.userName} {post.userSurname}
                      </h4>
                    </div>
                  </Link>
                  <button
                    onClick={() => deleteHandler(post.id)}
                    className="border-t border-purple dark:border-pinkish hover:bg-red/50 hover:text-white w-full rounded-b-xl transition-colors duration-500"
                  >
                    {t("DeletePost")}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOperationsContent;
