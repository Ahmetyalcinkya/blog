import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosWAuth } from "../../Utilities/AxiosWAuth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

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
          toast.success(
            "You need to click link in email to activate your account!"
          );
          history.goBack();
        })
        .catch((err) => toast.error("Something went wrong!"));
      setLoader(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 min-h-screen">
      <div className="pt-10 gap-y-1 flex flex-col justify-around items-center h-24 text-black dark:text-white">
        <h1 className="font-bold text-4xl">Sign Up</h1>
        <p>
          Already a member ?{" "}
          <Link to="/login" className="text-purple dark:text-pinkish font-bold">
            Log in
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="comp-max-width flex flex-col justify-center items-center"
      >
        <div className="form-div">
          <label className="form-label">
            İsim :
            <input
              className="form-input"
              placeholder="İsminizi giriniz..."
              {...register("name", {
                required: "İsim alanı doldurulmak zorundadır.",
                minLength: {
                  value: 3,
                  message: "İsminiz 3 harften kısa olamaz.",
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
            Soyisim :
            <input
              className="form-input"
              placeholder="İsminizi giriniz..."
              {...register("surname", {
                required: "Soyisim alanı doldurulmak zorundadır.",
                minLength: {
                  value: 3,
                  message: "Soyisminiz 3 harften kısa olamaz.",
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
            Profil Fotoğrafı :
            <input
              className="form-input"
              placeholder="URL giriniz..."
              {...register("profilePicture", {
                required: "Profil fotoğrafı eklemek zorunludur.",
                minLength: {
                  value: 25,
                  message: "URL 25 harften kısa olamaz.",
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
              placeholder="E-mail adresinizi giriniz..."
              {...register("email", {
                required: "Email alanı doldurulmak zorundadır.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email adresi geçerli değildir.",
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
            Password :
            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
              placeholder="Şifrenizi giriniz..."
              {...register("password", {
                required: "Lütfen şifrenizi giriniz.",
                minLength: {
                  value: 8,
                  message: "Şifreniz minimum 8 karakter olmalıdır.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                  message:
                    "Şifreniz büyük harf, küçük harf, sayı ve özel karakter içermelidir.",
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
            Validate Password :
            <input
              className="form-input"
              type={"password"}
              placeholder="Şifrenizi tekrar giriniz..."
              {...register("confirmPassword", {
                required: "Lütfen şifrenizi tekrar giriniz.",
                validate: (value) => {
                  return value === watch("password") || "Şifreler eşleşmedi.";
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
          {loader === true ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignupPageContent;
