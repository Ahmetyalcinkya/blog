import React from "react";
import { useSelector } from "react-redux";
import AdminSideBar from "../../Compounds/AdminSideBar";

const AdminHomePageContent = () => {
  const authenticatedUser = useSelector((state) => state.user.user);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="comp-max-width flex items-center justify-center py-20">
        <AdminSideBar />
        <div className="w-2/3 flex flex-col items-center justify-center text-purple dark:text-pinkish gap-y-1.5">
          <h4 className="text-xl italic">Yönetici Paneline Hoşgeldiniz</h4>
          <h4 className="font-bold text-2xl">
            {authenticatedUser?.name} {authenticatedUser?.surname}
          </h4>
          <h4 className="text-lg italic">
            Yapacağınız işlemi yan menüden seçebilirsiniz.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePageContent;
