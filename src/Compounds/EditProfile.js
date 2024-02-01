import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const EditProfile = ({ param }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-1.5 py-1.5 text-black dark:text-white">
      <Link to={`/user/${param?.id}/edit`} className="edit-link">
        Edit Profile
      </Link>
      <Link to={`/user/${param?.id}/comments`} className="edit-link">
        Yorumlarım
      </Link>
      <Link to={`/user/${param?.id}/posts`} className="edit-link">
        Postlarım
      </Link>
      <Link to={`/user/${param?.id}/add-new-blog`} className="edit-link">
        Add New Blog
      </Link>
    </div>
  );
};

export default EditProfile;
