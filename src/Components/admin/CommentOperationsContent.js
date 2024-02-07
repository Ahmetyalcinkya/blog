import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AdminSideBar from "../../Compounds/AdminSideBar";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";

const CommentOperationsContent = () => {
  const [comments, setComments] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  const deleteHandler = (id) => {
    AxiosWAuth()
      .delete(`comments/deleteComment/${id}`)
      .then((res) => toast.success("Comment Deleted!"))
      .catch((err) => toast.error("Comment not Deleted!"));
  };

  const onSubmit = (data) => {
    AxiosWAuth()
      .get(`comments/admin/getUsersComment?comments=${data.email}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    AxiosWAuth()
      .get("comments/admin/getAllComments")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
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
                Search for Comment :
                <input
                  className="form-input"
                  placeholder="Kullanıcı mail adresini giriniz..."
                  {...register("email", {
                    required: "Email alanı doldurulmak zorundadır.",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Email adresi geçerli değildir.",
                    },
                  })}
                />
                {errors.email && (
                  <span className="form-span">* {errors.email.message}</span>
                )}
              </label>
            </div>
            <button className="w-1/10 text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3.5 transition-colors duration-300">
              Search
            </button>
          </form>
          {comments?.length > 0 ? (
            comments?.map((comment) => (
              <div className="flex flex-col items-center border border-purple dark:border-pinkish bg-purple/30 dark:bg-pinkish/30 w-full rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow">
                <div
                  key={comment.id}
                  className="flex flex-col justify-start py-1 px-4 w-full"
                >
                  <h4 className="flex gap-x-2 items-center py-1">
                    <img
                      src={comment.userProfilePicture}
                      alt={comment.userId}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>
                      {comment.userName} {comment.userSurname}
                    </span>
                  </h4>
                  <hr className="w-full py-1" />
                  <p>{comment.content}</p>
                  <h4>{comment.createdAt.slice(0, 10)}</h4>
                </div>
                <button
                  onClick={() => deleteHandler(comment.id)}
                  className="border-t border-purple dark:border-pinkish hover:bg-red/50 hover:text-white w-full rounded-b-xl transition-colors duration-500"
                >
                  Delete Comment
                </button>
              </div>
            ))
          ) : (
            <h4 className="font-bold text-lg italic">
              Kullanıcıya ait herhangi bir yorum bulunmamaktadır!
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentOperationsContent;
