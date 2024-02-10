import React from "react";
import AdminSideBar from "../../Compounds/AdminSideBar";

const UserOperationsContent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex items-start justify-center py-20">
        <AdminSideBar />
        <div className="w-2/3 flex flex-col items-center justify-center text-purple dark:text-pinkish gap-y-1.5 px-8"></div>
        {/* USER OPERATIONS WILL BE ADDED && BACKEND FILTER METHOD WILL BE FIXED && TOKEN VERIFY ENDPOINT SHOULD ADD */}
      </div>
    </div>
  );
};

export default UserOperationsContent;
