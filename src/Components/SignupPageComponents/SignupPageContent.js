import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { t } from "i18next";

const SignupPageContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      profilePicture: "",
    },
    mode: "all",
  });

  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const onSubmit = (formData) => {
    let data = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      profilePicture: formData.profilePicture,
    };

    setLoader(true);
    setTimeout(() => {
      AxiosWAuth()
        .post("auth/register", data)
        .then((res) => {
          toast.success(t("Activation"));
          history.goBack();
        })
        .catch((err) => toast.error(t("SomethingWentWrong")));
      setLoader(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 min-h-screen">
      <div className="pt-10 gap-y-1 flex flex-col justify-around items-center h-24 text-black dark:text-white">
        <h1 className="font-bold text-4xl">{t("Signup")}</h1>
        <p>
          {t("aMember")}{" "}
          <Link to="/login" className="text-purple dark:text-pinkish font-bold">
            {t("Login")}
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="comp-max-width flex flex-col justify-center items-center"
      >
        <div className="form-div">
          <label className="form-label">
            {t("Name")} :
            <input
              className="form-input"
              placeholder={t("NamePlaceHolder")}
              {...register("name", {
                required: t("NameRequired"),
                minLength: {
                  value: 3,
                  message: t("NameNotValid"),
                },
              })}
            />
            {errors.name && (
              <span className="form-span">* {errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="form-div">
          <label className="form-label">
            {t("Surname")} :
            <input
              className="form-input"
              placeholder={t("SurnamePlaceHolder")}
              {...register("surname", {
                required: t("SurNameRequired"),
                minLength: {
                  value: 3,
                  message: t("SurNameNotValid"),
                },
              })}
            />
            {errors.surname && (
              <span className="form-span">* {errors.surname.message}</span>
            )}
          </label>
        </div>
        <div className="form-div">
          <label className="form-label">
            {t("ProfilePicture")} :
            <input
              className="form-input"
              placeholder={t("ProfilePicturePlaceHolder")}
              {...register("profilePicture", {
                required: t("ProfilePictureRequired"),
                minLength: {
                  value: 10,
                  message: t("URLLengthNotValid"),
                },
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: t("URLNotValid"),
                },
              })}
            />
            {errors.profilePicture && (
              <span className="form-span">
                * {errors.profilePicture.message}
              </span>
            )}
          </label>
        </div>
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
                minLength: {
                  value: 8,
                  message: t("PasswordLengthNotValid"),
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                  message: t("PasswordNotValid"),
                },
              })}
            />
            {errors?.password && (
              <span className="form-span">* {errors.password.message}</span>
            )}
          </label>
        </div>
        <div className="form-div">
          <label className="form-label">
            {t("VPassword")} :
            <input
              className="form-input"
              type={"password"}
              placeholder={t("VPasswordPlaceHolder")}
              {...register("confirmPassword", {
                required: t("VPasswordRequired"),
                validate: (value) => {
                  return value === watch("password") || t("PasswordNotMatched");
                },
              })}
            />
            {errors?.confirmPassword && (
              <span className="form-span">
                * {errors.confirmPassword?.message}
              </span>
            )}
          </label>
        </div>
        <button
          className="text-purple dark:text-pinkish hover:text-lila dark:hover:text-darkLila border border-purple dark:border-pinkish hover:bg-purple dark:hover:bg-pinkish focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-300"
          disabled={loader}
        >
          {loader === true ? <Spinner /> : <h4>{t("Submit")}</h4>}
        </button>
      </form>
    </div>
  );
};

export default SignupPageContent;
