import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CommentCard = ({ comment }) => {
  return (
    <div className="comp-max-width flex justify-center items-end gap-x-2 px-16">
      <img
        src={comment?.userProfilePicture}
        alt={comment?.id}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-1 flex-col justify-between gap-y-1 text-black dark:text-white font-medium">
        <div className="w-full border border-purple dark:border-pinkish rounded-lg px-8 py-2 gap-y-1 flex flex-col bg-purple/30 dark:bg-pinkish/30">
          <p>{comment?.content}</p>
          <h4 className="text-right text-purple dark:text-pinkish">
            Comment Date: {comment?.createdAt.slice(0, 10)}
          </h4>
        </div>
        <Link
          to={`/user/${comment?.userId}`}
          className=" w-1/6 h-10 flex gap-x-2 justify-start items-center ml-1"
        >
          <span className="text-purple dark:text-pinkish">
            <FontAwesomeIcon icon={faComments} />
          </span>{" "}
          {comment?.userName} {comment?.userSurname}
        </Link>
      </div>
    </div>
  );
};

export default CommentCard;
