import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Layouts/HomePage";
import BlogListPage from "./Layouts/BlogListPage";
import BlogPage from "./Layouts/BlogPage";
import AboutUsPage from "./Layouts/AboutUsPage";
import UserProfilePage from "./Layouts/UserProfilePage";

function App() {
  return (
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
    </Switch>
  );
}

export default App;
