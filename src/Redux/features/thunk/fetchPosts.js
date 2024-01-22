import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { setPost } from "../post/postSlice";

export const fetchPosts = () => (dispatch) => {
  AxiosWAuth()
    .get("posts")
    .then((response) => {
      dispatch(setPost(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
