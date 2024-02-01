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
import UserEditPage from "./Layouts/UserEditPage";
import CommentsPage from "./Layouts/CommentsPage";

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
        <Route exact path={"/user/:id"}>
          <UserProfilePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <RegisterPage />
        </Route>
        <Route exact path="/user/:id/edit">
          <ProtectedPage PageComponent={UserEditPage} fromURL={"/login"} />
        </Route>
        <Route exact path="/user/:id/comments">
          <ProtectedPage PageComponent={CommentsPage} fromURL={"/login"} />
        </Route>
        <Route exact path="/user/:id/add-new-blog">
          <ProtectedPage PageComponent={NewBlogPage} fromURL={"/login"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
