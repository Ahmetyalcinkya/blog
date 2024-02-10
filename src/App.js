import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { SwitchContext } from "./Contexts/SwitchContext";
import AboutUsPage from "./Layouts/AboutUsPage";
import BlogListPage from "./Layouts/BlogListPage";
import BlogPage from "./Layouts/BlogPage";
import ContactPage from "./Layouts/ContactPage";
import HomePage from "./Layouts/HomePage";
import LoginPage from "./Layouts/LoginPage";
import NewBlogPage from "./Layouts/NewBlogPage";
import ProtectedPage from "./Layouts/ProtectedPage";
import RegisterPage from "./Layouts/RegisterPage";
import TeamPage from "./Layouts/TeamPage";
import UserProfilePage from "./Layouts/UserProfilePage";
import AdminHomePage from "./Layouts/admin/AdminHomePage";
import CategoryOperations from "./Layouts/admin/CategoryOperations";
import CommentOperations from "./Layouts/admin/CommentOperations";
import PostOperations from "./Layouts/admin/PostOperations";
import UserOperations from "./Layouts/admin/UserOperations";
import { fetchAutoLogin } from "./Redux/features/thunk/fetchAutoLogin";
import { toast } from "react-toastify";
import { t } from "i18next";

function App() {
  const dispatch = useDispatch();
  const { theme } = useContext(SwitchContext);
  useEffect(() => {
    dispatch(fetchAutoLogin());
    if (theme === "light") {
      //TODO Redux içerisinden user name surname alarak toast mesajına ekle!
      toast(`${t("toast1")}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast(`${t("toast1")}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);
  return (
    <div
      className={`background-container ${
        theme === "light" ? "light-background" : "dark-background"
      }`}
    >
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/blogs/:category?"}>
          <BlogListPage />
        </Route>
        <Route exact path={"/blog/:category/:id"}>
          <BlogPage />
        </Route>
        <Route exact path={"/about"}>
          <AboutUsPage />
        </Route>
        <Route exact path={"/team"}>
          <TeamPage />
        </Route>
        <Route exact path={"/contact"}>
          <ContactPage />
        </Route>
        <Route exact path={"/user/:id"}>
          <UserProfilePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <RegisterPage />
        </Route>
        <Route exact path="/user/:id/add-new-blog">
          <ProtectedPage PageComponent={NewBlogPage} fromURL={"/login"} />
        </Route>
        <Route exact path="/admin/home">
          <ProtectedPage PageComponent={AdminHomePage} fromURL={"/login"} />
        </Route>
        <Route exact path="/admin/category-operations">
          <ProtectedPage
            PageComponent={CategoryOperations}
            fromURL={"/login"}
          />
        </Route>
        <Route exact path="/admin/comment-operations">
          <ProtectedPage PageComponent={CommentOperations} fromURL={"/login"} />
        </Route>
        <Route exact path="/admin/post-operations">
          <ProtectedPage PageComponent={PostOperations} fromURL={"/login"} />
        </Route>
        <Route exact path="/admin/user-operations">
          <ProtectedPage PageComponent={UserOperations} fromURL={"/login"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
