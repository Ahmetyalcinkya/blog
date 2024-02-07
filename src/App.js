import React, { useContext, useState } from "react";
import { SwitchContext } from "./Contexts/SwitchContext";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Layouts/HomePage";
import BlogListPage from "./Layouts/BlogListPage";
import BlogPage from "./Layouts/BlogPage";
import AboutUsPage from "./Layouts/AboutUsPage";
import UserProfilePage from "./Layouts/UserProfilePage";
import "./App.css";
import LoginPage from "./Layouts/LoginPage";
import RegisterPage from "./Layouts/RegisterPage";
import ProtectedPage from "./Layouts/ProtectedPage";
import NewBlogPage from "./Layouts/NewBlogPage";
import TeamPage from "./Layouts/TeamPage";
import ContactPage from "./Layouts/ContactPage";
import AdminHomePage from "./Layouts/admin/AdminHomePage";
import CategoryOperations from "./Layouts/admin/CategoryOperations";
import CommentOperations from "./Layouts/admin/CommentOperations";
import PostOperations from "./Layouts/admin/PostOperations";
import UserOperations from "./Layouts/admin/UserOperations";

function App() {
  const { theme } = useContext(SwitchContext);
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
