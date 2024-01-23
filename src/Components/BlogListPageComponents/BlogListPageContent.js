import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/features/thunk/fetchPosts";
import SearchBar from "../../Compounds/SearchBar";
import useQueryParams from "../../hooks/useQueryParams";
import CategoryCardItems from "../../Compounds/CategoryCardItems";
import { fetchCategories } from "../../Redux/features/thunk/fetchCategories";
import { fetchAllPosts } from "../../Redux/features/thunk/fetchAllPosts";

const filteredParamInitial = {
  filter: "",
};

const BlogListPageContent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const categories = useSelector((state) => state.global.categories);

  const [queryParams, setQueryParams] = useQueryParams();
  const [filteredParams, setFilteredParams] = useState(filteredParamInitial);
  const [categoryProducts, setCategoryProducts] = useState();

  const changeHandler = (e) => {
    setFilteredParams({ ...filteredParams, filter: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryParams();
  };

  useEffect(() => {
    dispatch(fetchPosts({ ...queryParams }));
  }, [queryParams]);

  useEffect(() => {
    posts?.length === 0 && dispatch(fetchAllPosts());
  }, []);

  useEffect(() => {
    categories?.length === 0 && dispatch(fetchCategories());
  }, []);

  //   SEARCH BAR AND FILTER OPTIONS MUST BE ADDED
  //   ADD NEW BLOG

  //   RIGHBAR
  //   HIGH RATED 5 BLOG
  //   LATEST 5 BLOG
  //   CATEGORIES

  console.log(categoryProducts);

  return (
    <div className="flex comp-max-width">
      <div>
        <CategoryCardItems
          categories={categories}
          setCategoryProducts={setCategoryProducts}
        />
        <form onSubmit={handleSubmit}>
          <SearchBar changeHandler={changeHandler} />
          <button>Search</button>
        </form>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BlogListPageContent;
