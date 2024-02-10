import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/features/thunk/fetchUser";
import { useHistory } from "react-router-dom";
import { fetchStates } from "../../Redux/features/global/globalSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { t } from "i18next";

const LoginPageContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (loginData) => {
    setTimeout(() => {
      dispatch(fetchUser(loginData));
    }, 2000);
  };

  const userFetching = useSelector(
    (state) => state.user.fetchStates === fetchStates.fetching
  );
  const userFetched = useSelector(
    (state) => state.user.fetchStates === fetchStates.fetched
  );

  const { name, surname } = useSelector((state) => state.user.user);
  console.log(name, surname, userFetching, userFetched);

  if (userFetched) {
    history.push("/");
    toast.success(`${t("Welcome")} ${name} ${surname}`);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 min-h-screen">
      <div className="pt-10 gap-y-1 flex flex-col justify-around items-center h-24 text-black dark:text-white">
        <h1 className="font-bold text-4xl">{t("Login")}</h1>
        <p>
          {t("DontHaveAcc")}{" "}
          <Link
            to="/signup"
            className="text-purple dark:text-pinkish font-bold"
          >
            {t("Signup")}
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="comp-max-width flex flex-col justify-center items-center"
      >
        <div className="form-div">
          <label className="form-label">
            Email :
            <input
              className="form-input"
              placeholder={t("EMailPlaceHolder")}
              {...register("email", {
                required: t("MailRequired"),
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: t("MailNotValid"),
                },
              })}
            />
            {errors.email && (
              <span className="form-span">* {errors.email.message}</span>
            )}
          </label>
        </div>
        <div className="form-div">
          <label className="form-label">
            {t("Password")} :
            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
              placeholder={t("PasswordPlaceHolder")}
              {...register("password", {
                required: t("PasswordRequired"),
              })}
            />
            {errors?.password && (
              <span className="form-span">* {errors.password.message}</span>
            )}
          </label>
        </div>
        <button
          className="text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300"
          disabled={userFetching}
        >
          {userFetching ? <Spinner /> : <h4>{t("Submit")}</h4>}
        </button>
      </form>
    </div>
  );
};

export default LoginPageContent;
