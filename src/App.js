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
        <Route exact path={"/blog"}>
          <BlogListPage />
        </Route>
        <Route exact path={"/blog/:blogId"}>
          <BlogPage />
        </Route>
        <Route exact path={"/about"}>
          <AboutUsPage />
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
      </Switch>
    </div>
  );
}

export default App;
