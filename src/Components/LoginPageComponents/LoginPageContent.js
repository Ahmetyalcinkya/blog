import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/features/thunk/fetchUser";
import { useHistory } from "react-router-dom";
import { fetchStates } from "../../Redux/features/global/globalSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

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
    toast.success(`Hoşeldin ${name} ${surname}`);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 min-h-screen">
      <div className="pt-10 gap-y-1 flex flex-col justify-around items-center h-24 text-black dark:text-white">
        <h1 className="font-bold text-4xl">Log In</h1>
        <p>
          Don't have an account ?{" "}
          <Link
            to="/signup"
            className="text-purple dark:text-pinkish font-bold"
          >
            Sign up
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
              placeholder="E-mail adresinizi giriniz..."
              {...register("email", {
                required: "Lütfen e-mail adresinizi giriniz.",
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
          {userFetching ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoginPageContent;
