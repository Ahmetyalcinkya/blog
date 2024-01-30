import { Redirect, useHistory } from "react-router-dom";

const ProtectedPage = ({ PageComponent, fromURL }) => {
  const history = useHistory();

  const checkUserLoggedIn = () => {
    if (localStorage.getItem("Blog-token")) {
      return <PageComponent />;
    } else {
      setTimeout(() => {
        history.push({
          pathname: "/login",
          state: { referrer: fromURL },
        });
      }, 3000);

      return (
        <div className="h-screen justify-center items-center flex flex-col gap-y-4 animate-pulse">
          <h4 className="text-xl">You need to log in first.</h4>
          <h3 className="text-2xl">Redirecting to the login page.</h3>
        </div>
      );
    }
  };

  return checkUserLoggedIn();
};

export default ProtectedPage;
