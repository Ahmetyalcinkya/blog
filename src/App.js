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
        <Route exact path={"/user"}>
          <UserProfilePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <RegisterPage />
        </Route>
        <Route exact path="/user/add-new-blog">
          <ProtectedPage PageComponent={NewBlogPage} fromURL={"/login"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
