import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { setPost } from "../post/postSlice";

export const fetchAllPosts = () => (dispatch) => {
  AxiosWAuth()
    .get("posts/")
    .then((response) => {
      dispatch(setPost(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
