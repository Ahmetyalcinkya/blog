import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { useParams } from "react-router-dom";
import EditProfile from "../../Compounds/EditProfile";

const UserProfilePageContent = () => {
  const param = useParams();
  const authenticatedUser = useSelector((state) => state.user.user);

  const [user, setUser] = useState(null);
  const [postOfUser, setPostOfUser] = useState(null);

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
        <div className="flex h-96 flex-col flex-1 justify-center items-center">
          <img
            src={user?.profilePicture}
            alt={user?.id}
            className="w-52 h-52 rounded-full"
          />
          <h4>
            {user?.name} {user?.surname}
          </h4>
          <h4>Member since: {user?.registrationDate.slice(0, 10)}</h4>
          {authenticatedUser?.id === user?.id && <EditProfile param={param} />}
        </div>
        <div className="flex-1"></div>
        {/* MAP POSTS */}
      </div>
    </div>
  );
};

export default UserProfilePageContent;
