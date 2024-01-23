import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { t } from "i18next";
import { Link } from "react-router-dom";
import Slider from "../../Compounds/Slider";
import { useDispatch, useSelector } from "react-redux";
import BlogCompound from "../../Compounds/BlogCompound";
import { fetchAllPosts } from "../../Redux/features/thunk/fetchAllPosts";

const PageContent = ({ goToGitHub, goToLinkedIn, goToInstagram }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const highestRating = [...posts]
    ?.sort((a, b) => b.rating - a.rating)
    .slice(0, 9);

  useEffect(() => {
    posts?.length === 0 && dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-around">
      <section className="my-8 comp-max-width border h-72 bg-purple/15 dark:bg-pinkish/15 border-purple shadow-lightCustomBoxShadow dark:border-pinkish dark:shadow-darkCustomBoxShadow rounded-2xl relative flex p-3">
        <div className="w-full flex flex-col relative justify-around items-center">
          <div>
            <h4 className="font-bold text-darkLila dark:text-pinkish text-3xl absolute left-20 top-3">
              {t("Articles")}
            </h4>
            <div className="flex gap-x-3 text-darkLila dark:text-pinkish absolute right-16 top-3">
              <button onClick={goToLinkedIn}>
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </button>
              <button onClick={goToGitHub}>
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </button>
              <button onClick={goToInstagram}>
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </button>
            </div>
          </div>
          <p className="pl-20 pr-16 text-darkLila dark:text-pinkish">
            {t("Description")}
          </p>
          <Link
            to="/blog"
            className="py-2 px-6 border border-purple dark:border-pinkish shadow-lightCustomBoxShadow dark:shadow-darkCustomBoxShadow rounded-full bg-purple/30 dark:bg-pinkish/30 text-white hover:bg-darkLila hover:dark:bg-pinkish transition-colors duration-300"
          >
            {t("ExploreBlogs")}
          </Link>
        </div>
      </section>
      <section className="w-full mb-12">
        <Slider />
      </section>
      <section className="comp-max-width flex flex-col items-center my-4">
        <h4 className="font-bold text-darkLila dark:text-pinkish text-3xl">
          {t("Highest").toLocaleUpperCase()}
        </h4>
        <div className="flex flex-wrap p-4 justify-center gap-12">
          {highestRating?.map((post) => (
            <BlogCompound post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PageContent;
