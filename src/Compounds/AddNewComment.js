import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AxiosWAuth } from "../Utilities/AxiosWAuth";
import { useHistory } from "react-router-dom";

const AddNewComment = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: "",
    },
    mode: "all",
  });

  const history = useHistory();
  const [loader, setLoader] = useState(false);

  const onSubmit = (comment) => {
    setLoader(true);
    setTimeout(() => {
      AxiosWAuth()
        .post("comments/", comment)
        .then((res) => {
          toast.success("Comment Saved!");
        })
        .catch((err) => {
          toast.success("Please Login!");
          history.push("/login");
          console.log(err);
        });
      setLoader(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="comp-max-width px-16 my-20 flex justify-center items-center"
    >
      <div className="w-full pl-12 flex flex-col justify-center items-center gap-y-3">
        <label className="font-bold w-full text-purple dark:text-pinkish">
          Add New Comment :
          <textarea
            className="bg-white w-full border border-purple dark:border-pinkish rounded-lg block p-2.5 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow mt-2"
            placeholder="Yorumunuzu giriniz... ( Yorumunuz Minimum 3, Maximum 250 karakterden oluşabilir. )"
            {...register("content", {
              required: "Yorum alanı doldurulmak zorundadır.",
              minLength: {
                value: 3,
                message: "Yorumunuz 3 harften kısa olamaz.",
              },
              maxLength: {
                value: 250,
                message: "Yorumunuz 250 harften uzun olamaz.",
              },
            })}
          />
          {errors.content && (
            <span className="form-span">* {errors.content.message}</span>
          )}
        </label>
        <input type="hidden" {...register("postID")} defaultValue={id} />
        <button
          className="w-1/10 text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300 h-12"
          disabled={loader}
        >
          {loader ? <Spinner /> : "Yorumu Gönder"}
        </button>
      </div>
    </form>
  );
};

export default AddNewComment;
