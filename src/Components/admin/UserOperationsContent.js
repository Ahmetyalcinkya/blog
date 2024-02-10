import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminSideBar from "../../Compounds/AdminSideBar";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { Link } from "react-router-dom";

const UserOperationsContent = () => {
  const [allUsers, setAllUsers] = useState(null);
  console.log(allUsers);

  const deleteHandler = (id) => {
    AxiosWAuth()
      .delete(`users/admin/deleteUser/${id}`)
      .then((res) => toast.success(t("UserToast")))
      .catch((err) => toast.error(t("UserToastFail")));
  };

  useEffect(() => {
    AxiosWAuth()
      .get("users")
      .then((res) => setAllUsers(res.data))
      .catch((err) => toast.error(t("SomethingWentWrong")));
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex items-start justify-center py-20">
        <AdminSideBar />
        <div className="w-2/3 flex flex-col items-center justify-center text-purple dark:text-pinkish gap-y-1.5 px-8">
          <h4 className="font-bold text-3xl">{t("Users")}</h4>
          <hr className="w-full my-2" />
          {allUsers != null &&
            allUsers.length > 0 &&
            allUsers.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center border border-purple dark:border-pinkish bg-purple/30 dark:bg-pinkish/30 w-full rounded-xl shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow my-6"
              >
                <Link
                  to={`/user/${user.id}`}
                  key={user.id}
                  className="flex flex-col justify-start py-1 px-4 w-full"
                >
                  <h4 className="flex gap-x-2 items-center py-1">
                    <img
                      src={user.profilePicture}
                      alt={user.id}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>
                      {user.name} {user.surname}
                    </span>
                  </h4>
                  <hr className="w-full py-1" />
                  <h4>
                    {t("UserEmail")} {user.email}
                  </h4>
                  <h4>
                    {t("UserDate")} {user.registrationDate.slice(0, 10)}
                  </h4>
                </Link>
                <button
                  onClick={() => deleteHandler(user.id)}
                  className="border-t border-purple dark:border-pinkish hover:bg-red/50 hover:text-white w-full rounded-b-xl transition-colors duration-500"
                >
                  {t("DeleteUser")}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserOperationsContent;
