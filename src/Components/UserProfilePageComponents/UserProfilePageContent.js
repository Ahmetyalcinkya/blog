import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { useParams } from "react-router-dom";
import EditProfile from "../../Compounds/EditProfile";
import BlogCard from "../../Compounds/BlogCard";

const UserProfilePageContent = () => {
  const param = useParams();
  const authenticatedUser = useSelector((state) => state.user.user);

  const [user, setUser] = useState(null);
  const [postOfUser, setPostOfUser] = useState(null);
  const [commentsOfUser, setCommentsOfUser] = useState(null); //Comments will be send to commentspage

  const highestPosts = postOfUser?.sort((a, b) => b.rating - a.rating);

  useEffect(() => {
    AxiosWAuth()
      .get(`users/${param?.id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    user?.email !== undefined &&
      AxiosWAuth()
        .get(`posts/user?posts=${user?.email}`)
        .then((res) => setPostOfUser(res.data))
        .catch((err) => console.log(err));
  }, [user]);
  return (
    <div className="w-full flex justify-center items-start py-16 min-h-screen">
      <div className="comp-max-width flex justify-center">
        <div className="flex w-96 h-96 flex-col justify-center items-center gap-y-3">
          <img
            src={user?.profilePicture}
            alt={user?.id}
            className="w-52 h-52 rounded-full shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow"
          />
          <div className="flex flex-col w-60 text-purple dark:text-pinkish gap-y-1">
            <h4 className="text-xl font-bold">
              {user?.name} {user?.surname}
            </h4>
            <h4 className="text-sm">{user?.email}</h4>
            <h4>
              Member since:{" "}
              <span className="text-lg font-bold">
                {user?.registrationDate.slice(0, 10)}
              </span>
            </h4>
          </div>
          {authenticatedUser?.id === user?.id && <EditProfile param={param} />}
        </div>
        {postOfUser === null ? (
          <h4>Kullanıcının herhangi bir gönderisi yok.</h4>
        ) : (
          <div className="flex flex-wrap flex-1 w-full gap-y-10">
            <h4 className="text-purple dark:text-pinkish text-3xl">
              Most Popular Posts
            </h4>
            {highestPosts.map((post) => (
              <BlogCard post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfilePageContent;
