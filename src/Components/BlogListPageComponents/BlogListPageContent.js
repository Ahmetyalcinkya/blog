import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/features/thunk/fetchPosts";
import SearchBar from "../../Compounds/SearchBar";
import useQueryParams from "../../hooks/useQueryParams";
import CategoryCardItems from "../../Compounds/CategoryCardItems";
import { fetchCategories } from "../../Redux/features/thunk/fetchCategories";
import { fetchAllPosts } from "../../Redux/features/thunk/fetchAllPosts";
import { fetchPostsByTitle } from "../../Redux/features/thunk/fetchPostsByTitle";
import BlogCard from "../../Compounds/BlogCard";
import { useParams } from "react-router-dom";
import HighestCard from "../../Compounds/HighestCard";

const filteredParamInitial = {
  filter: "",
};

const BlogListPageContent = () => {
  const { category } = useParams();
  console.log(category);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const categories = useSelector((state) => state.global.categories);

  const [queryParams, setQueryParams] = useQueryParams();
  const [filteredParams, setFilteredParams] = useState(filteredParamInitial);
  const [categoryProducts, setCategoryProducts] = useState();

  const [catId, setCatId] = useState();

  const changeHandler = (e) => {
    setFilteredParams({ ...filteredParams, filter: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryParams(filteredParams);
  };
  useEffect(() => {
    const foundCategory = categories?.find(
      (c) => c.title.toLowerCase() == category
    );
    setCatId(foundCategory?.id);
  }, [categories, category]);

  useEffect(() => {
    dispatch(fetchPosts({ ...queryParams, category: catId }));
    dispatch(fetchPostsByTitle(queryParams));
  }, [queryParams, catId]);

  useEffect(() => {
    posts?.length === 0 && dispatch(fetchAllPosts());
  }, []);

  useEffect(() => {
    categories?.length === 0 && dispatch(fetchCategories());
    dispatch(fetchAllPosts());
  }, []);

  //   ADD NEW BLOG
  const highestPosts = [...posts]
    ?.sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="flex flex-col comp-max-width gap-y-8 min-h-screen">
      <div className="flex flex-col">
        <CategoryCardItems
          categories={categories}
          setCategoryProducts={setCategoryProducts}
        />
        <div className="flex items-center justify-between">
          <form onSubmit={handleSubmit} className="flex w-96 gap-x-2 h-10">
            <SearchBar changeHandler={changeHandler} />
            <button className="flex justify-center items-center w-20 border border-purple dark:border-pinkish rounded-lg bg-purple/30 dark:bg-pinkish/30 hover:bg-darkLila/60 hover:dark:bg-lila/60 transition-colors duration-500 text-purple dark:text-white font-bold">
              Search
            </button>
          </form>
          <div className="mr-[26.5rem] cursor-pointer border py-2 px-3 border-purple dark:border-pinkish rounded-lg bg-purple/30 dark:bg-pinkish/30 hover:bg-darkLila/60 hover:dark:bg-lila/60 transition-colors duration-500 text-purple dark:text-white font-bold">
            Yeni Post
            {/* Background yeşil olacak!!! Fontawesome icon eklenecek!!! */}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-10 my-4">
        <div className="flex-1 flex flex-col gap-y-10">
          {posts?.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
        <div className="w-96 h-[30.5rem] flex flex-col items-center justify-start border rounded-xl border-purple dark:border-pinkish bg-purple/30 dark:bg-pinkish/30 shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow px-2 py-2">
          <h4 className="font-bold my-4 w-full text-center text-2xl text-darkLila dark:text-pinkish">
            Posts you might want to see!
          </h4>
          {highestPosts?.map((post) => (
            <HighestCard post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPageContent;
