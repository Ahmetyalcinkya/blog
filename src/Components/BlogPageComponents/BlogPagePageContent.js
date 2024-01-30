import React, { useEffect, useState } from "react";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import BlogSlider from "../../Compounds/BlogSlider";

const BlogPagePageContent = ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    AxiosWAuth()
      .get(`posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);

  const images = post?.images;

  console.log(post);

  return (
    <div className="w-full flex justify-center items-start min-h-screen">
      <div className="comp-max-width flex flex-col justify-center items-center">
        <div className="w-full flex px-16 justify-between items-center pt-4 text-3xl text-purple dark:text-pinkish font-bold">
          <h3>{post?.categoryTitle}</h3>
          <h3>{post?.categoryRating}</h3>
        </div>
        <hr className="w-full my-4 text-purple dark:text-pinkish" />
        <div className="px-8">
          <div className="px-8 border-l border-r border-purple dark:border-pinkish">
            <div className="flex flex-col w-full gap-y-4">
              <h3 className="text-2xl text-purple dark:text-white font-medium">
                {post?.title}
              </h3>
              <p className="text-black dark:text-white">{post?.content}</p>
              <BlogSlider images={images} />
            </div>
            <div className="flex flex-col py-4">
              <div className="flex w-full px-8 gap-x-8 items-center justify-between text-purple dark:text-pinkish">
                <div className="flex items-center gap-x-4">
                  <img
                    src={post?.userPicture}
                    alt={post?.userID}
                    className="w-20 h-20 rounded-full"
                  />
                  <h4 className="text-2xl font-bold">
                    {post?.userName} {post?.userSurname}
                  </h4>
                </div>
                <h4 className="font-bold text-xl">
                  Created At: {post?.createdAt.slice(0, 10)}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPagePageContent;
